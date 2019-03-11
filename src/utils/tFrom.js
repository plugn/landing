import has from 'lodash.has';

import getLang from './getLang';

const lang = getLang();

export default function fFrom(prop, i18Object) {
  console.log('has(i18Object, prop)', has(i18Object, prop));
  
  if (has(i18Object, prop)) {
    console.log('===i18Object', i18Object);
    return {
      ...i18Object,
      [prop]: i18Object[lang],
    };
  }
  return {
    ...i18Object,
  };
}
