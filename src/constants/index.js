import getLang from '@/utils/getLang';

// Main
export const LANG = getLang();

// Keys
export const API_TOKEN = '8pY3tTQ3H43zMVOwhzp7ks4pWIuhPP';

export const API_GATEWAY_URL = JSON.stringify(process.env.API_GATEWAY_URL || null);

export const FRONTSITE_URL = JSON.stringify(process.env.FRONTSITE_URL || 'http://racoon.local');

export const DADATA_API_KEY = JSON.stringify(process.env.DADATA_API_KEY || '3dec983b8bbd14cffe7bb1393ed363c64b03d0e0');

export const SENTRY_DSN = JSON.stringify(process.env.SENTRY_FRONTEND_DSN);

// API
export const getApiUrl = location => `${location.protocol}//api.${String(location.hostname).replace(/^m\./, '')}`;
export const API_URL = window.location.hostname === 'localhost' ? '//api.racoon.local' : getApiUrl(window.location);

// Auth
export const IS_NEW_LOGIN = 'Is new login';
export const WRONG_CREDENTIALS = 'Wrong credentials';
export const ACCOUNT_UNKNOWN = 'Пользователь не найден.';
export const VK_AUTH_TYPE = 'VKAuthType';

// Screen sizes
export const XL = '(min-width: 1200px)';
export const LG = '(min-width: 992px)';
export const MD = '(min-width: 768px)';
export const SM = '(min-width: 768px)';
