const isProd = process.env.NODE_ENV === 'production';

export const config = {
    apiHost: isProd ? '' : 'http://localhost:3008',
    phoneRegExp: /^1[3|4|5|7|8][0-9]{9}$/,
    passwordRegExp: /(?=.*([a-zA-Z].*))(?=.*[0-9].*)[a-zA-Z0-9-*/+.~!@#$%^&*()]{6,20}$/,
    nickRegExp: /^\S{4,20}$/,
};
