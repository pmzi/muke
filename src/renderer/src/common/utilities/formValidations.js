export function required(message = 'This field is required!') {
  return {
    required: true,
    whitespace: true,
    message,
  };
}

export function url(message = 'Enter a valid URL!') {
  return {
    type: 'url',
    message,
  };
}

export function number(message = 'Enter a valid number!') {
  return {
    pattern: /^\d+$/,
    message,
  };
}
