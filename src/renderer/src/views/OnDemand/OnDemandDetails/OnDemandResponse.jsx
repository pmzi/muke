import React, { useState, useContext } from 'react';

import ResponseEditor from '@common/components/ResponseEditor';
import { persistTheme, readTheme } from '@common/utilities/storage/theme';
import ResponseContext from '../ResponseContext';

export default function OnDemandResponse() {
  const [theme, setTheme] = useState(readTheme());
  const {
    response: value, language, changeLanguage, changeResponse,
  } = useContext(ResponseContext);

  function changeTheme(newTheme) {
    persistTheme(newTheme);

    setTheme(newTheme);
  }
  function changeSetting({ language: newLanguage, value: newValue, theme: newTheme }) {
    changeLanguage(newLanguage);
    changeResponse(newValue);
    changeTheme(newTheme);
  }

  return (
    <ResponseEditor language={language} value={value} theme={theme} changeSetting={changeSetting} />
  );
}
