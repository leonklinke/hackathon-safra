
export const TOKEN_KEY = "@safrai9-Token";
export const USER_ID = "@safrai9-Id";
export const USER_TYPE = "@safrai9-Type";
export const USER_NAME = "@safrai9-Name";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const getId = () => localStorage.getItem(USER_ID);
export const getType = () => localStorage.getItem(USER_TYPE);
export const getName = () => localStorage.getItem(USER_NAME);
export const setType = (type) => localStorage.setItem(USER_TYPE, type);
export const login = (token, user) => {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(USER_ID, user.id);
    localStorage.setItem(USER_TYPE, user.type);
    localStorage.setItem(USER_NAME, user.name);
};
export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_ID);
    localStorage.removeItem(USER_TYPE);
    localStorage.removeItem(USER_NAME);
};