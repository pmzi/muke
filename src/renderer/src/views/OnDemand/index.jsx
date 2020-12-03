import React, { useState, useCallback } from 'react';
import { Button } from 'antd';
import { useParams } from 'react-router-dom';

import { onDemandResponse } from '@/api/pipeline';
import OnDemandMatchMeta from './OnDemandMatchMeta';
import OnDemandDetails from './OnDemandDetails';
import ResponseContext from './ResponseContext';

export default function OnDemand() {
  const { requestId } = useParams();

  const changeLanguage = useCallback((language) => {
    // eslint-disable-next-line no-use-before-define
    changeResponseContextValue({ language });
  });
  const changeResponse = useCallback((response) => {
    // eslint-disable-next-line no-use-before-define
    changeResponseContextValue({ response });
  });

  const [responseContextValue, setResponseContextValue] = useState({
    language: '',
    response: '',
    changeLanguage,
    changeResponse,
  });

  function changeResponseContextValue(
    {
      language = responseContextValue.language,
      response = responseContextValue.response,
    },
  ) {
    setResponseContextValue({
      language,
      response,
      changeResponse,
      changeLanguage,
    });
  }

  function close() {
    window.close();
  }

  function respondRequestAndClose() {
    const { response, language } = responseContextValue;
    onDemandResponse.respond({
      id: requestId,
      response,
      language,
    });

    close();
  }

  function proxyRequestAndClose() {
    onDemandResponse.proxy(requestId);

    close();
  }

  return (
    <ResponseContext.Provider value={responseContextValue}>
      <div className="flex flex-col h-screen">
        <div className="p-4">
          <OnDemandMatchMeta />
        </div>
        <div className="flex-1 min-h-0">
          <OnDemandDetails />
        </div>
        <div className="flex justify-between p-4">
          <Button onClick={proxyRequestAndClose}>Proxy</Button>
          <Button onClick={respondRequestAndClose} type="primary">Respond</Button>
        </div>
      </div>
    </ResponseContext.Provider>
  );
}
