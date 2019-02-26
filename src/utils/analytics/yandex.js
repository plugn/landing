import {convertCurrencyRaw} from "../../../../common/assets/js/services/currency";

// Отправка данных в google analytics и Яндекс.Метрику.

// В Google Analytics данные отправляются с помощью функции ga() из yandex.js.
// Документация: https://developers.google.com/analytics/devguides/collection/analyticsjs/
// Для поддержки отправки данных электронной торговли используется плагин:
// https://developers.google.com/analytics/devguides/collection/analyticsjs/ecommerce

// Яндекс.Метрика интегрировалась через dataLayer по следующей инструкции:
// https://yandex.ru/support/metrika/data/e-commerce.html

function translateGood(good) {
    console.log('original good', good);
    let obj = {
        id: good.id,
        name: good.title[window.lang_code],
        brand: good.brand || '',
        category: '',
        variant: ''
    };

    if (good.hasOwnProperty('modification')) {
        obj.variant = good.modification.id;
        obj.price = good.modification.price;
    }
    else {
        obj.price = good.min_price;
    }
    obj.price = convertCurrencyRaw(obj.price, good.currency, 'RUB');

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

export function registerAction(action, event, currencyCode, goods) {
    try {
        goods.forEach(good => {

            const translatedGood = translateGood(good);

            const data = {
                ecommerce: {
                    currencyCode,
                    [action]: {
                        products: [translatedGood],
                        actionField: {
                            id: translatedGood.orderId
                        }

                    }
                }
            };
            console.log('registerYandexAction', data);
            window.dataLayer.push(data);
        });
    } catch (ignored) {
        console.error('yandex analytics exception', ignored);
    }
}

// TODO: переделать валюту с хардкода
function getCurrencyCode() {
    return 'RUB';
}

export function registerGoodView(good) {
    return registerAction('detail', null, getCurrencyCode(), [good]);
}

export function registerAddToCart(good) {
    return registerAction('add', 'addToCart', getCurrencyCode(), [good]);
}

export function registerRemoveFromCart(good) {
    return registerAction('remove', 'removeFromCart', getCurrencyCode(), [good]);
}

export function registerPurchaseYandex(goods, order_numbers) {
    const selectedCartWithOrderIds = goods.map(x => ({...x, orderId: order_numbers[x.modification_id]}));
    return registerAction('purchase', null, getCurrencyCode(), selectedCartWithOrderIds);
}
