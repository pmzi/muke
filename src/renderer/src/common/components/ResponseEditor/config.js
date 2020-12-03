const THEMES = {
  LIGHT: 'vs-light',
  DARK: 'vs-dark',
};

const DEFAULT_THEME = THEMES.DARK;

const LANGUAGES = {
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

const LANGUAGES_VALUE_TO_OBJECT = {};
Object.values(LANGUAGES).forEach((language) => {
  LANGUAGES_VALUE_TO_OBJECT[language.value] = language;
});

const DEFAULT_LANGUAGE = LANGUAGES.JSON;

export {
  LANGUAGES_VALUE_TO_OBJECT, DEFAULT_LANGUAGE, LANGUAGES, DEFAULT_THEME, THEMES,
};
