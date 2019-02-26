import qs from 'qs';

// eslint-disable-next-line import/no-mutable-exports
export let baseUrl = null;

/**
 * Функция для поддержки выноса фронтенда на другой сайт
 * @param url
 */
export function setBaseUrl(url) {
  baseUrl = url;
}

/**
 * Добаляет базовый URL к URL из параметра
 * @param url
 * @return {*}
 */
export function appendBaseUrl(url) {
  return baseUrl ? baseUrl + url : url;
}

/**
 * Получить параметры запроса
 */
export function getQuery(url = null) {
  const target = url ? url.split('?')[1] : window.location.search.replace('?', '');
  return qs.parse(target, {
    decoder(value) {
      // eslint-disable-next-line no-param-reassign
      value = decodeURIComponent(value);
      if (/^(\d+|\d*\.\d+)$/.test(value)) {
        return parseFloat(value);
      }
      const keywords = {
        true: true,
        false: false,
        null: null,
        // eslint-disable-next-line object-shorthand
        undefined: undefined,
      };
      if (value in keywords) {
        return keywords[value];
      }

      return value;
    },
  });
}

/**
 * Изменить параметры запроса
 * @param args словарь с параметрами
 * @param clearPrevious bool очистить текущий кверистринг
 * @param target модифицировать запрос для данного урла. Для текущего по умолчанию
 * @returns {string} измененный URL
 */
export function modifyQuery(args, clearPrevious = false, target = null) {
  let queryString = getQuery();
  let url = target;

  if (clearPrevious) {
    queryString = {};
    if (url) {
      // eslint-disable-next-line prefer-destructuring
      url = target.split('?')[0];
    }
  }

  // eslint-disable-next-line no-restricted-syntax
  for (const key of Object.keys(args)) {
    if (args[key] === null) delete queryString[key];
    else queryString[key] = args[key];
  }

  let link = '';
  if (Object.keys(queryString).length > 0) {
    link = url
      ? `${url}?${qs.stringify(queryString)}`
      : `${window.location.pathname}?${qs.stringify(queryString)}`;
  } else {
    link = url ? `${url}` : `${window.location.pathname}`;
  }
  return link;
}

/**
 * Получить полный URL для обработки стрничной системой
 * @returns {string}
 */
export function getFullUrlPath() {
  return window.location.pathname;
}

/**
 * Получает куку
 * @param name название куки
 * @returns string значение
 */
export function getcookie(name) {
  const cookie = ` ${document.cookie}`;
  const search = ` ${name}=`;
  let setStr = null;
  let offset = 0;
  let end = 0;
  if (cookie.length > 0) {
    offset = cookie.indexOf(search);
    if (offset !== -1) {
      offset += search.length;
      end = cookie.indexOf(';', offset);
      if (end === -1) {
        end = cookie.length;
      }
      setStr = unescape(cookie.substring(offset, end));
    }
  }
  return setStr;
}

/**
 * Конкатит текущую локаль с урлом
 * @param url
 * @returns {string}
 */
export function langUrl(url) {
  return `/${window.lang_code + url}`;
}

/**
 * перезапускает обработчики вебфлоу
 */
// export function webflowReload() {
//   // https://github.com/poetic/webflow-tricks/blob/master/README.md афигенно!
//   window.Webflow.destroy();
//   window.Webflow.ready();
// }

export function langObjectResult(textObject) {
  return textObject[window.lang_code || 'en'] || textObject.en;
}

/**
 * обработка склонений существительного в единственном/множественном числе на русском языке
 * @param number
 * @param titles варианты существительного для использования с данным number
 * @returns {*}
 */
export function declOfNum(number, titles) {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ];
}
