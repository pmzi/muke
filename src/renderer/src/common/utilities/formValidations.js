// eslint-disable-next-line import/prefer-default-export
export function required(message = 'This field is required!') {
  return {
    required: true,
    message,
  };
}
