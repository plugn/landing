const lang = (window.navigator.userLanguage || window.navigator.language);

export default function getLang() {
  return lang.split('-')[0] || 'en';
}
