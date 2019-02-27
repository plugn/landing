// Keys
export const API_GATEWAY_URL = JSON.stringify(process.env.API_GATEWAY_URL || null);

export const DADATA_API_KEY = JSON.stringify(process.env.DADATA_API_KEY || '3dec983b8bbd14cffe7bb1393ed363c64b03d0e0');

export const SENTRY_DSN = JSON.stringify(process.env.SENTRY_FRONTEND_DSN);

// Auth
export const IS_NEW_LOGIN = 'Is new login';

export const WRONG_CREDENTIALS = 'Wrong credentials';

export const ACCOUNT_UNKNOWN = 'Пользователь не найден.';
