import Cookies from 'universal-cookie';


const cookies = new Cookies();

/**
 * setCookie  - Sets a cookie in the user's browser
 * @param {String} name     Name/key of cookie to save
 * @param {String} value    Value to save in cookie
 * @param {Object} options  Options to override defaults
 */
export const setCookie = (name, value, options = {}) => {
    return window.localStorage.setItem(name, value);
};

export const getCookie = name => {
    return window.localStorage.getItem(name);
}

export const deleteCookie = name => {
    return window.localStorage.removeItem(name);
}