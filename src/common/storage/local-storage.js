const JWT_KEY = 'token';
const USER = 'user'

function getToken() {
  return JSON.parse(window.localStorage.getItem(JWT_KEY));
}

function setToken(token) {
  return window.localStorage.setItem(JWT_KEY, JSON.stringify(token));
}

function clearToken() {
    return window.localStorage.removeItem(JWT_KEY);
}

function getUser() {
    return JSON.parse(window.localStorage.getItem(USER));
}

function setUser(data) {
    return window.localStorage.setItem(USER, JSON.stringify(data));
}

function clearUser() {
    return window.localStorage.removeItem(USER);
}

export { getToken, setToken, clearToken, setUser, getUser, clearUser };
