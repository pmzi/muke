import React from 'react';
import { useParams } from 'react-router-dom';

import { useGetRoute } from '@common/hooks/dataHooks';
import RouteHeadersSettingsLoading from './RouteHeadersSettingsLoading';
import RouteHeadersSettingsListForm from './RouteHeadersSettingsListForm';

export default function RouteHeadersSettings() {
  const { routeId } = useParams();
  const { isLoading, data } = useGetRoute(routeId);

  if (isLoading) return <RouteHeadersSettingsLoading />;

  const { headers } = data;

  return (
    <RouteHeadersSettingsListForm headers={headers} />
  );
}
