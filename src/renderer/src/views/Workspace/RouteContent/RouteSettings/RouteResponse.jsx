import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { ClearOutlined } from '@ant-design/icons';
import {
  DEFAULT_LANGUAGE, DEFAULT_THEME, THEMES, THEME_STORAGE_KEY,
} from '@common/constants/editor';
import { write, read } from '@services/storage';
import Editor from './Editor';

import RouteResponseLanguageSelector from './RouteResponseLanguageSelector';

function persistTheme(theme) {
  write(THEME_STORAGE_KEY, theme);
}

function getPersistedTheme() {
  return read(THEME_STORAGE_KEY);
}

const INITIAL_THEME = getPersistedTheme() || DEFAULT_THEME;

export default function RouteResponse() {
  const [currentLanguage, setCurrentLanguage] = useState(DEFAULT_LANGUAGE);
  const [currentTheme, setCurrentTheme] = useState(INITIAL_THEME);
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(currentLanguage.code);
  }, [currentLanguage]);

  function toggleCurrentTheme() {
    const theme = currentTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;

    setCurrentTheme(theme);

    persistTheme(theme);
  }

  function handleValueChange(newVal) {
    setValue(newVal);
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow overflow-hidden">
        <Editor
          theme={currentTheme}
          value={value}
          onValueChange={handleValueChange}
          language={currentLanguage.value}
        />
      </div>

      <footer className="flex items-center justify-between bg-gray-800">
        <Button type="text" shape="circle" icon={<ClearOutlined className="text-white" onClick={toggleCurrentTheme} />} />

        <RouteResponseLanguageSelector
          currentLanguage={currentLanguage}
          onChangeLanguage={setCurrentLanguage}
        />
      </footer>
    </div>
  );
}
