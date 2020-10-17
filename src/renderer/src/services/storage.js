export function write(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function read(key) {
  const value = localStorage.getItem(key);
  return JSON.parse(value);
}
