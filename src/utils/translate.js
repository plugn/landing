import set from 'lodash.set';

import getLang from './getLang';

const lang = getLang();

const translate = (prop, i18Object) => (
  set(i18Object, prop, i18Object[prop][lang])
);

export default translate;
