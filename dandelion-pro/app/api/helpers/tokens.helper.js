const localStorageKey = 'tokens';

export const setTokens = tokens => localStorage.setItem(localStorageKey, JSON.stringify(tokens));

export const getTokens = () => {
  const tokens = localStorage.getItem(localStorageKey);
  return tokens && JSON.stringify(tokens);
};

export const clearTokens = () => localStorage.removeItem(localStorageKey);

export const getToken = type => {
  const allowedTypes = ['access', 'refresh'];

  const tokens = localStorage.getItem(localStorageKey);

  if (!allowedTypes.includes(type)) return null;
  if (!tokens) return null;

  const parsedTokens = JSON.parse(tokens);

  return type === 'access' ? parsedTokens.access_token : parsedTokens.refresh_token;
}

export const isAuthorised = () => !!localStorage.getItem(localStorageKey)