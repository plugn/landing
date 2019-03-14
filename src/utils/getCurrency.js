import getLang from './getLang';

const lang = getLang();

const currencies = {
  en: 'USD',
  ru: 'RUB',
};

const getCurrency = () => currencies[lang];

export default getCurrency;
