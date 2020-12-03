import React, { useState } from 'react';

import ResponseEditor from '@common/components/ResponseEditor';
import { useEditRoute, useGetRoute } from '@common/hooks/dataHooks';
import { useParams } from 'react-router-dom';
import { persistTheme, readTheme } from '@common/utilities/storage/theme';

export default function RouteResponse() {
  const { routeId } = useParams();
  const { data } = useGetRoute(routeId);
  const [editRoute] = useEditRoute();
  const [theme, setTheme] = useState(readTheme());

  function changeTheme(newTheme) {
    persistTheme(newTheme);

    setTheme(newTheme);
  }
  function changeSetting({ language, value, theme: newTheme }) {
    editRoute({
      id: routeId,
      language,
      value,
    });

    changeTheme(newTheme);
  }

  const { response: { language, value } } = data;

  return (
    <ResponseEditor language={language} value={value} theme={theme} changeSetting={changeSetting} />
  );
}
