import React from 'react';

import ResponseEditor from '@common/components/ResponseEditor';
import { useEditRoute, useGetRoute } from '@common/hooks/dataHooks';
import { useParams } from 'react-router-dom';

export default function RouteResponse() {
  const { routeId } = useParams();
  const { data } = useGetRoute(routeId);
  const [editRoute] = useEditRoute();

  function changeSetting({ language, value }) {
    editRoute({
      id: routeId,
      language,
      value,
    });
  }

  const { response: { language, value } } = data;

  return (
    <ResponseEditor language={language} value={value} changeSetting={changeSetting} />
  );
}
