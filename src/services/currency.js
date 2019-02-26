import api from 'api';

const CURRENCY_SIGNS = {
  USD: '$',
  RUB: '₽',
  CNY: '¥',
};

function getUserCurrency() {
  // return store.state.profile ? store.state.profile.currency : 'RUB';
}

export function displayCurrency(value, currency, hasSign = true) {
  //  @TODO поменять, когда будет нормальная работа с валютами
  if (!currency) {
    // eslint-disable-next-line no-param-reassign
    currency = getUserCurrency();
  }

  // eslint-disable-next-line no-param-reassign
  value = Math.ceil(value * 100) / 100;
  if (currency === 'RUB') {
    // eslint-disable-next-line no-param-reassign
    value = Math.round(value); // без копеек
  }

  if (!hasSign) return `${value}`;

  if (currency === 'USD') {
    return `${CURRENCY_SIGNS[currency]}${value}`;
  }
  return `${value}&nbsp;${CURRENCY_SIGNS[currency]}`;
}

export function convertCurrencyRaw(value, originCurrency, targetCurrency) {
  if (!targetCurrency) {
    // eslint-disable-next-line no-param-reassign
    targetCurrency = getUserCurrency();
  }
  // eslint-disable-next-line no-console
  console.log(originCurrency, targetCurrency);
  if (originCurrency === targetCurrency) {
    return value;
  }

  const originRate = originCurrency === 'USD'
    ? 1.0
    : parseFloat(window.currency_rates[originCurrency]);
  const targetRate = targetCurrency === 'USD'
    ? 1.0
    : parseFloat(window.currency_rates[targetCurrency]);

  return (parseFloat(value) / originRate) * targetRate;
}

export function convertCurrency(value, originCurrency, hasSign = true) {
  const targetCurrency = getUserCurrency();
  return displayCurrency(
    convertCurrencyRaw(value, originCurrency),
    targetCurrency,
    hasSign,
  );
}

export function getSupportedCurrencies() {
  return api('/goods/v1.0/currencies/codes_list/');
}
