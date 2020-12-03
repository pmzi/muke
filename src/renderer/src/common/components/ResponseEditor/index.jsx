import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { ClearOutlined } from '@ant-design/icons';

import {
  THEMES, LANGUAGES_VALUE_TO_OBJECT, DEFAULT_LANGUAGE, DEFAULT_THEME,
} from './config';
import Editor from './MonacoEditor';
import ResponseEditorLanguageSelector from './ResponseEditorLanguageSelector';

export default function RouteResponse({
  value, theme, language, changeSetting,
}) {
  function handleAnyValueChange({
    value: changedValue = value,
    theme: changedTheme = theme,
    language: changedLanguage = language,
  }) {
    changeSetting({
      value: changedValue,
      theme: changedTheme,
      language: changedLanguage,
    });
  }

  function toggleCurrentTheme() {
    const newTheme = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;

    handleAnyValueChange({ theme: newTheme });
  }

  function handleValueChange(newValue) {
    handleAnyValueChange({ value: newValue });
  }

  function handleLanguageChange(newLanguage) {
    handleAnyValueChange({ language: newLanguage.value });
  }

  const languageObject = LANGUAGES_VALUE_TO_OBJECT[language];

  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow overflow-hidden">
        <Editor
          theme={theme}
          value={value}
          onValueChange={handleValueChange}
          language={languageObject.value}
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
  theme: PropTypes.string,
  language: PropTypes.string,
  value: PropTypes.string,
  changeSetting: PropTypes.func,
};

RouteResponse.defaultProps = {
  theme: DEFAULT_THEME,
  language: DEFAULT_LANGUAGE.value,
  value: DEFAULT_LANGUAGE.code,
  changeSetting: () => {},
};
