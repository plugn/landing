import has from 'lodash.has';
import set from 'lodash.set';

import getLang from './getLang';

const lang = getLang();

export default function fFrom(props, i18Object) {
  // let obj = {};
  props.forEach((prop) => {
    if (has(i18Object, prop)) {
      set(i18Object, prop, i18Object[prop][lang]);
    }
  });
  return i18Object;
}
