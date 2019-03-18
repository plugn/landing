/**
 *
 * @description parses http headers string
 * and returns them as Array of { key: value }
 *
 * @headers {string}
 * var headers = `Pragma: no-cache
 * Cache-Control: no-cache
 * Content-Type: application/json; charset=UTF-8
 * Accept-Encoding: gzip, deflate, br
 * Accept-Language: ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7`
 *
 * @returns {array} < [headerName, headerValue] >
 */

export const parseHttpHeaders = headers => (
  String(headers)
    .split(/[\r\n]+/)
    .filter(Boolean)
    .map(header => header.split(/:\s+/))
);

export const getCookie = cookieName => (
  document.cookie.split(';')
    .map(s => s.trim().split('='))
    .find(v => v[0] === cookieName) || []
)[1];

export const tupleToObject = tuple => ({ [String(tuple[0])]: tuple[1] });

export const collectionToMap = collection => collection.reduce((acc, v) => ({ ...acc, ...v }), {});
