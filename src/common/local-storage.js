const JWT_KEY = 'token';

function getToken() {
  return window.localStorage.getItem(JWT_KEY);
}

function setToken(token) {
  return window.localStorage.setItem(JWT_KEY, token);
}

function clearToken() {
  return window.localStorage.removeItem(JWT_KEY);
}

export { getToken, setToken, clearToken };
