import { BASE_URL } from '@common/constants/urls';

// eslint-disable-next-line import/prefer-default-export
export function openModalSubWindow(url, options) {
  window.open(`${BASE_URL}${url}`, '', '', options);
}
