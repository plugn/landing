import has from 'lodash.has';
import set from 'lodash.set';

import { LANG } from '@/constants';

/**
 *
 * @param {Array<String>} props - properties to translate
 * @param {Object<T>} i18Object - object with keys with values in i18n format
 * @return {Object<{[string]: any}>}
 */
export default function fFrom(props, i18Object) {
  props.forEach((prop) => {
    if (has(i18Object, prop)) {
      set(i18Object, prop, i18Object[prop][LANG]);
    }
  });
  return i18Object;
}
