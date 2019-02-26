import {convertCurrencyRaw} from "../../../../common/assets/js/services/currency";

// Отправка данных в google analytics и Яндекс.Метрику.

// В Google Analytics данные отправляются с помощью функции ga() из yandex.js.
// Документация: https://developers.google.com/analytics/devguides/collection/analyticsjs/
// Для поддержки отправки данных электронной торговли используется плагин:
// https://developers.google.com/analytics/devguides/collection/analyticsjs/ecommerce

// Яндекс.Метрика интегрировалась через dataLayer по следующей инструкции:
// https://yandex.ru/support/metrika/data/e-commerce.html

function translateGoodEC(good) {
    console.log('original good', good);
    let obj = {
        id: good.id,
        name: good.title[window.lang_code] || '',
        brand: good.brand || '',
        category: '',
        variant: ''
    };

    if (good.hasOwnProperty('modification')) {
        obj.variant = good.modification.id;
        obj.price = good.modification.price;
        obj.price = convertCurrencyRaw(obj.price, good.currency, 'RUB');
    }
    else if (good.hasOwnProperty('min_price')) {
        obj.price = good.min_price || 0;
        obj.price = convertCurrencyRaw(obj.price, good.currency, 'RUB');
    }


    if (good.hasOwnProperty('count')) {
        obj.quantity = good.count;
    }

    if (good.hasOwnProperty('categories')) {
        const categories = good.categories;
        try {
            good.category = categories[categories.length - 1][window.lang_code];
        }
        catch (e) {
            good.category = '';
        }
    }

    if (good.hasOwnProperty('orderId')) {
        obj.orderId = good.orderId;
    }

    return obj;
}

export function registerActionEC(action, currencyCode, goods, orderId = null) {
    try {
        ga('set', 'currencyCode', currencyCode);
        console.log('---');
        console.log(goods);
        let products = goods.map(translateGoodEC);

        switch (action) {
            case 'click':
                console.log('click');
                products.forEach(good => ga('ec:addProduct', good));
                ga('ec:setAction', 'click');
                ga('send', 'event', 'ecommerce', action);
                break;
            case 'detail':
                console.log('detail');
                products.forEach(good => ga('ec:addProduct', good));
                ga('ec:setAction', 'detail');
                ga('send', 'event', 'ecommerce', action);
                break;
            case 'addCart':
                console.log('addCart');
                products.forEach(good => ga('ec:addProduct', good));
                ga('ec:setAction', 'add');
                ga('send', 'event', 'ecommerce', action);
                break;
            case 'removeCart':
                console.log('removeCart');
                products.forEach(good => ga('ec:addProduct', good));
                ga('ec:setAction', 'remove');
                ga('send', 'event', 'ecommerce', action);
                break;
            case 'checkout':
                console.log('checkout');
                products.forEach(good => ga('ec:addProduct', good));
                ga('ec:setAction', 'checkout');
                ga('send', 'event', 'ecommerce', action);
                break;
            case 'purchase':
                console.log('purchase---');
                console.log(products);
                products.forEach(good => {
                    ga('ec:addProduct', good);
                    ga('ec:setAction', 'purchase', {
                        'id': good.orderId,
                        'revenue': good.price
                    });
                    ga('send', 'event', 'ecommerce', action);
                });
                break;
        }

        console.log('ga sent', action);
    } catch (ignored) {
        console.error('analytics exception', ignored);
    }
}

// сказали в аналитику всегда передавать рубли
function getCurrencyCode() {
    return 'RUB';
}

export function registerClickEC(goodId) {
    let good = {
        id: goodId
    };
    return registerActionEC('click', getCurrencyCode(), [good]);
}

export function registerGoodViewEC(good) {
    return registerActionEC('detail', getCurrencyCode(), [good]);
}

export function registerAddToCartEC(good) {
    return registerActionEC('addCart', getCurrencyCode(), [good]);
}

export function registerRemoveFromCartEC(good) {
    return registerActionEC('removeCart', getCurrencyCode(), [good]);
}

export function registerCheckoutEC(goods) {
    return registerActionEC('checkout', getCurrencyCode(), goods);
}
export function registerPurchaseEC(goods, order_numbers) {
    const selectedCartWithOrderIds = goods.map(x => ({...x, orderId: order_numbers[x.modification_id]}));
    return registerActionEC('purchase', getCurrencyCode(), selectedCartWithOrderIds);
}

export function registerIndexBannerViewEC() {
    $('.index-banner').each(function() {
        try {
            ga('ec:addPromo', {
                'id': $(this).data('banner-id'),
                'position': 'top_banner'
            });
            ga('send', 'event', 'ecommerce', 'viewBanner');
        }
        catch (e) {}
    });
}

export function registerIndexBannerClickEC() {
    $('.index-banner').on('click', function() {
        try {
            ga('ec:addPromo', {
                'id': $(this).data('banner-id'),
                'position': 'top_banner'
            });
            ga('ec:setAction', 'promo_click');
            ga('send', 'event', 'ecommerce', 'clickBanner');
        }
        catch (e) {}
    });
}
