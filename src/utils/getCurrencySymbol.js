import { CURRENCY } from '@/constants';

const currencySymbols = {
  USD: '$',
  RUB: '₽',
};

const getCurrencySymbol = () => currencySymbols[CURRENCY];

export default getCurrencySymbol;
