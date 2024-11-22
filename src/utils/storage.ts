export const getFromStorage = (key: string): string | null => {
  return localStorage.getItem(key);
};

export const setToStorage = (key: string, value: string): void => {
  localStorage.setItem(key, value);
};
