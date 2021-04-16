import Cookies from "js-cookie";

export const TOKEN_KEY = '@template_app';

export const userIsAuthenticated = () => Cookies.get(TOKEN_KEY) && true

export const userGetToken = () => Cookies.get(TOKEN_KEY);

export const userLogin = (token:any) => Cookies.set(TOKEN_KEY, token);

export const userLogout = () => Cookies.remove(TOKEN_KEY)