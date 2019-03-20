import { parseHttpHeaders, getCookie } from './http';

/**
 * HTTP Request wrapper
 * @author Max L Dolgov <bananafishbone@gmail.com>
 *
 * @description created to eliminate CORS preflighted requests
 * @param url {string}
 * @param data {object}
 * @param method {string}
 * @param props
 * @param props.headersText {string} example
 *   Pragma: no-cache
 *   Cache-Control: no-cache
 * @param props.headers {array} example
 *   [["Pragma", "no-cache"], ["Cache-Control", "no-cache"]]
 *
 * @returns Promise<XMLHttpRequest>
 */

const options = { json: false };

function xhr(url, data, method, params = {}) {
  // eslint-disable-next-line
  // console.log('xhr() ', {url, data, method, props});

  const props = { ...options, ...params };

  return new Promise((resolve, reject) => {
    const instance = new XMLHttpRequest();

    ['abort', 'error', 'timeout'].forEach(
      (event) => {
        instance[`on${event}`] = error => reject(error);
      },
    );

    instance.onreadystatechange = () => {
      if (instance.readyState === XMLHttpRequest.DONE) {
        setTimeout(() => {
          try {
            const result = props.json ? JSON.parse(instance.responseText) : instance.responseText;
            resolve(result);
          } catch (exception) {
            const error = new Error('Cannot parse HTTP response: ', instance.responseText);
            reject(error);
          }
        }, 0);
      }
    };

    method = (`${method}`).toUpperCase() || 'GET';
    instance.open(method, url);

    instance.setRequestHeader('Accept', 'application/json, text/javascript, */*');
    // instance.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

    if (method !== 'GET') {
      instance.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    }
    if (props) {
      if (props.csrfTokenCookieName && !/^(https?:)?\/\//.test(url)) {
        instance.setRequestHeader('X-CSRFToken', getCookie(props.csrfTokenCookieName));
      }
      if (props.authTokenCookieName) {
        const authToken = getCookie(props.authTokenCookieName);
        // eslint-disable-next-line
        if (authToken) {
          instance.setRequestHeader('Authorization', `Bearer ${authToken}`);
        }
      }

      let headers = [];
      if (typeof props.headersText === 'string') {
        headers = parseHttpHeaders(props.headersText);
      }
      if (Array.isArray(props.headers)) {
        headers = headers.concat(props.headers);
      }
      // console.info(':: headers :: ', headers);

      headers.forEach(tuple => instance.setRequestHeader(tuple[0], tuple[1]));
    }

    data = data && typeof data === 'object' ? JSON.stringify(data) : data;
    instance.send(data || null);
  });
}

['GET', 'POST', 'PUT', 'DELETE'].forEach(
  (method) => {
    const lcMethod = method.toLowerCase();
    // eslint-disable-next-line no-multi-assign
    xhr[lcMethod] = xhr[method] = (url, data, props) => xhr(url, data, method, props);
  },
);

export default xhr;
