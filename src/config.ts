const isProd = process.env.NODE_ENV === 'production';

export const config = {
    apiHost: isProd ? '' : 'http://localhost:3008',
};
