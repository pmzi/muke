export const THEMES = {
  LIGHT: 'vs-light',
  DARK: 'vs-dark',
};

export const DEFAULT_THEME = THEMES.DARK;

export const LANGUAGES = {
  JSON: {
    text: 'JSON',
    value: 'json',
    code: `{
  "headers": {},
  "body": "Hey There"
}`,
  },
  JAVASCRIPT: {
    text: 'JavaScript',
    value: 'javascript',
    code: `exports.handler = function(){
  return {
    headers: {},
    body: 'Hey There',
  };
}`,
  },
  HTML: {
    text: 'HTML',
    value: 'html',
    code: `<html>
  <body>
    Hey There
  </body>
</html>`,
  },
};

export const DEFAULT_LANGUAGE = LANGUAGES.JSON;

export const THEME_STORAGE_KEY = 'editor/theme';
