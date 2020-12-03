import { read, write } from '@services/storage';

import { THEME_STORAGE_KEY } from './config';

export function readTheme() {
  return read(THEME_STORAGE_KEY);
}

export function persistTheme(value) {
  return write(THEME_STORAGE_KEY, value);
}
