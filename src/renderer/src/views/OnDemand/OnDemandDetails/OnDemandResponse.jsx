import React, { useContext } from 'react';

import ResponseEditor from '@common/components/ResponseEditor';
import ResponseContext from '../ResponseContext';

export default function OnDemandResponse() {
  const {
    response: value, language, changeLanguage, changeResponse,
  } = useContext(ResponseContext);

  function changeSetting({ language: newLanguage, value: newValue }) {
    changeLanguage(newLanguage);
    changeResponse(newValue);
  }

  return (
    <ResponseEditor language={language} value={value} changeSetting={changeSetting} />
  );
}
