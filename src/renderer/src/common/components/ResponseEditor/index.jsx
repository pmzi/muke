import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { ClearOutlined } from '@ant-design/icons';

import {
  THEMES, DEFAULT_LANGUAGE, DEFAULT_THEME, LANGUAGES_VALUE_TO_OBJECT,
} from './config';
import Editor from './MonacoEditor';
import ResponseEditorLanguageSelector from './ResponseEditorLanguageSelector';
import { persistTheme, readTheme } from './themeStorage';

export default function RouteResponse({
  value, changeSetting, language,
}) {
  const [values, setValues] = useState({
    value,
    language,
  });
  const [theme, setTheme] = useState(readTheme() || DEFAULT_THEME);

  const languageObject = useMemo(
    () => LANGUAGES_VALUE_TO_OBJECT[values.language] || DEFAULT_LANGUAGE, [values.language],
  );

  useEffect(() => {
    if (!values.value) {
      setValues((prevState) => ({
        ...prevState,
        value: languageObject.code,
      }));
    }
  }, [values.language]);

  useEffect(() => {
    changeSetting(values);
  }, [values]);

  function toggleCurrentTheme() {
    const newTheme = values.theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;

    persistTheme(newTheme);

    setTheme(newTheme);
  }

  function handleValueChange(newValue) {
    setValues((prevState) => ({
      ...prevState,
      value: newValue,
    }));
  }

  function handleLanguageChange(newLanguage) {
    setValues((prevState) => ({
      ...prevState,
      language: newLanguage,
    }));
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow overflow-hidden">
        <Editor
          theme={theme}
          language={values.language}
          value={values.value}
          onValueChange={handleValueChange}
        />
      </div>

      <footer className="flex items-center justify-between bg-gray-800">
        <Button type="text" shape="circle" icon={<ClearOutlined className="text-white" onClick={toggleCurrentTheme} />} />

        <ResponseEditorLanguageSelector
          currentLanguage={languageObject}
          onChangeLanguage={handleLanguageChange}
        />
      </footer>
    </div>
  );
}

RouteResponse.propTypes = {
  language: PropTypes.string,
  value: PropTypes.string,
  changeSetting: PropTypes.func,
};

RouteResponse.defaultProps = {
  language: DEFAULT_LANGUAGE.value,
  value: DEFAULT_LANGUAGE.code,
  changeSetting: () => {},
};
