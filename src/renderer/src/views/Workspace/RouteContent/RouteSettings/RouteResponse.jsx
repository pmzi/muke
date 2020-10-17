import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import { Button } from 'antd';
import { ClearOutlined, LoadingOutlined } from '@ant-design/icons';

import {
  DEFAULT_LANGUAGE, DEFAULT_THEME, THEMES,
} from '@common/constants/editor';

import RouteResponseLanguageSelector from './RouteResponseLanguageSelector';

export default function RouteResponse() {
  const [currentLanguage, setCurrentLanguage] = useState(DEFAULT_LANGUAGE);
  const [currentTheme, setCurrentTheme] = useState(DEFAULT_THEME);

  function toggleCurrentTheme() {
    setCurrentTheme(currentTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT);
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
