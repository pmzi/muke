import { read, write } from '@services/storage';

const THEME_STORAGE_KEY = 'editor/theme';

export function readTheme() {
  return read(THEME_STORAGE_KEY);
}

export function persistTheme(value) {
  return write(THEME_STORAGE_KEY, value);
}
