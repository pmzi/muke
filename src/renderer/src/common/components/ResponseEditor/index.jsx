import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { ClearOutlined } from '@ant-design/icons';

import {
  THEMES, DEFAULT_LANGUAGE, DEFAULT_THEME, LANGUAGES_VALUE_TO_OBJECT,
} from './config';
import Editor from './MonacoEditor';
import ResponseEditorLanguageSelector from './ResponseEditorLanguageSelector';

export default function RouteResponse({
  value, theme, language, changeSetting,
}) {
  const [values, setValues] = useState({
    value,
    theme,
    language,
  });

  const languageObject = LANGUAGES_VALUE_TO_OBJECT[values.language] || DEFAULT_LANGUAGE;

  function handleAnyValueChange({
    value: changedValue = values.value,
    theme: changedTheme = values.theme,
    language: changedLanguage = values.language,
  }) {
    const finalChangedValues = {
      value: changedValue,
      theme: changedTheme,
      language: changedLanguage,
    };

    changeSetting(finalChangedValues);

    setValues(finalChangedValues);
  }

  useEffect(() => {
    if (!values.value) {
      handleAnyValueChange({
        value: languageObject.code,
      });
    }
  }, [values.language]);

  function toggleCurrentTheme() {
    const newTheme = values.theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;

    handleAnyValueChange({ theme: newTheme });
  }

  function handleValueChange(newValue) {
    handleAnyValueChange({ value: newValue });
  }

  function handleLanguageChange(newLanguage) {
    handleAnyValueChange({ language: newLanguage.value });
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow overflow-hidden">
        <Editor
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
