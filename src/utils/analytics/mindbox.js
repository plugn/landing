/* global mindbox */

import { getQuery, modifyQuery } from '@/utils/helpers';

function roundPrice(price) {
  // ну у js немного странная работа со всем этим, кмк так надежнее
  // price = price.toString();
  // const decimalSeparatorIdx = price.indexOf('.');
  // if (decimalSeparatorIdx !== -1) {
  //     price = price.substring(0, decimalSeparatorIdx + 3);
  // }
  // return price;

  return Math.ceil(price * 100) / 100;
}

function getCheapestModification(good) {
  let cheapestModificationIdx = 0;
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i < good.modifications.length; i++) {
    if (
      good.modifications[i].price < good.modifications[cheapestModificationIdx].price
    ) {
      cheapestModificationIdx = i;
    }
  }
  return good.modifications[cheapestModificationIdx];
}

// eslint-disable-next-line camelcase
export function registerGoodViewMindbox(good, modification_id) {
  try {
    // eslint-disable-next-line camelcase
    if (modification_id === null) {
      // eslint-disable-next-line camelcase, no-param-reassign
      modification_id = getCheapestModification(good).id;
    }

    mindbox('async', {
      operation: 'ProductView',
      data: {
        viewProduct: {
          product: {
            sku: {
              ids: {
                alabom: modification_id,
              },
            },
            ids: {
              alabom: good.id,
            },
          },
        },
      },
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
}

export function registerCategoryViewMindbox(categoryId) {
  try {
    mindbox('async', {
      operation: 'CategoryView',
      data: {
        viewProductCategory: {
          productCategory: {
            ids: {
              alabom: categoryId,
            },
          },
        },
      },
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
}

export function testCategoryViewMindbox() {
  try {
    const goodsApp = document.querySelector('#good_list_container');
    if (!goodsApp) return;
    const categoryId = goodsApp.getAttribute('data-category-id');
    if (!categoryId) return;
    // eslint-disable-next-line no-console
    console.log('registering category view within mindbox', categoryId);

    registerCategoryViewMindbox(categoryId);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
}

export function registerSignUpMindbox({
  id,
  email,
  firstName,
  lastName,
}) {
  try {
    mindbox('async', {
      operation: 'Registration',
      data: {
        customer: {
          ids: {
            alabomId: id,
          },
          email,
          firstName,
          lastName,
          subscriptions: [
            {
              pointOfContact: 'email',
              valueByDefault: true,
              isSubscribed: true,
            },
          ],
        },
      },
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
}

export function registerPurchaseMindbox({ userId, userAuthTicket, orderData }) {
  if (!userAuthTicket) {
    return;
  }

  try {
    // доступ к первому элементу, потому что он там ровно один
    // goods.MindboxOrderSerializer
    const good = orderData.goods[0];
    // eslint-disable-next-line no-console
    console.log(good);

    mindbox('async', {
      operation: 'CreateOrder',
      data: {
        customer: {
          ids: {
            alabomId: userId,
          },
          authenticationTicket: userAuthTicket,
        },
        order: {
          ids: {
            alabomOrderId: orderData.order_number.toString(),
          },
          deliveryCost: roundPrice(orderData.delivery_price),
          totalPrice: roundPrice(orderData.total_price),
          lines: [
            {
              product: {
                sku: {
                  ids: {
                    alabom: good.modification.id,
                  },
                  price: roundPrice(good.converted_prices.RUB),
                },
                ids: {
                  alabom: good.id,
                },
              },
              basePricePerItem: roundPrice(good.converted_prices.RUB),
              quantity: good.count,
            },
          ],
          payments: [
            {
              type: orderData.payment_method,
              amount: orderData.total_price,
            },
          ],
        },
      },
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
}

export function registerLoginMindbox(id) {
  try {
    mindbox('async', {
      operation: 'Authorization',
      data: {
        customer: {
          ids: {
            alabomId: id,
          },
        },
      },
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
}

function translateCartToMindbox(cart) {
  const productList = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const good of cart) {
    productList.push({
      product: {
        sku: {
          ids: {
            alabom: good.modification_id,
          },
        },
        ids: {
          alabom: good.id,
        },
        price: roundPrice(good.price),
      },
      count: good.count,
      price: roundPrice(good.count * good.price),
    });
  }

  return productList;
}

export function registerCartChangeMindbox(cart) {
  const productList = translateCartToMindbox(cart);

  try {
    mindbox('async', {
      operation: 'SetCartList',
      data: {
        productList,
      },
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
}

export const mindBoxInit = () => {
  // for production only
  // region init
  if (typeof mindbox !== 'undefined') {
    mindbox('webpush.create');
    setTimeout(() => {
      mindbox('webpush.subscribe', {
        getSubscriptionOperation: 'GetWebPushSubscription',
        subscribeOperation: 'SubscribeToWebpush',
        onGranted() {},
        onDenied() {},
      });
    }, 5000); // Через 5000 миллисекунд = 5 секунд;
  }
  // endregion

  // region social login hook
  const queryParams = getQuery();
  // eslint-disable-next-line no-prototype-builtins
  if (queryParams.hasOwnProperty('social_user_created')) {
    // == instead of === is an expected behaviour
    if (queryParams.social_user_created === '1') {
      registerSignUpMindbox({
        id: window.user.id,
        firstName: window.user.first_name,
        lastName: window.user.last_name,
        email: window.user.email,
      });
    } else {
      registerLoginMindbox(window.user.id);
    }

    // сам параметр уберется в onPageChangeMindbox
  }
  // endregion
};

/**
 * Хук, который вызовется при каждой смене урла
 */
export function onPageChangeMindbox(loader) {
  // категории
  testCategoryViewMindbox();

  // убрать query-параметр после социального логина
  const queryParams = getQuery();
  // eslint-disable-next-line no-prototype-builtins
  if (queryParams.hasOwnProperty('social_user_created')) {
    const newUrl = modifyQuery({
      social_user_created: null,
    });
    loader.changeUrlWithoutReload(newUrl);
  }
}
