import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import { Button } from 'antd';
import { ClearOutlined, LoadingOutlined } from '@ant-design/icons';

import {
  DEFAULT_LANGUAGE, DEFAULT_THEME, THEMES, THEME_STORAGE_KEY,
} from '@common/constants/editor';
import { write, read } from '@services/storage';

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

  function toggleCurrentTheme() {
    const theme = currentTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;

    setCurrentTheme(theme);

    persistTheme(theme);
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow">
        <Editor
          height="100%"
          theme={currentTheme}
          value={currentLanguage.code}
          language={currentLanguage.value}
          loading={<LoadingOutlined />}
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
