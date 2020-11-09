module.exports = {
  env: {
    commonjs: true,
    es2020: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@shared', './src/shared'],
          ['@services', './src/services'],
          ['@src', './src'],
          ['@controllers', './src/controllers'],
          ['@model', './src/model'],
        ],
        extensions: ['.js'],
      },
    },
  },
};
