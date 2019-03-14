const lang = (window.navigator.userLanguage || window.navigator.language);

const langs = ['en', 'ru'];

export default function getLang() {
  const browserLang = lang.split('-')[0];
  return langs.includes(browserLang) ? browserLang : 'en';
}
