import React from 'react';
import { useParams } from 'react-router-dom';

import { useGetRoute } from '@common/hooks/dataHooks';
import RouteGeneralSettingsLoading from './RouteGeneralSettingsLoading';
import RouteGeneralSettingsForm from './RouteGeneralSettingsForm';

export default function RouteGeneralSettings() {
  const { routeId } = useParams();
  const { data, isLoading } = useGetRoute(routeId);

  if (isLoading) return <RouteGeneralSettingsLoading />;

  const { onDemandResponse, active } = data;
  const formData = { onDemandResponse, active };

  return (
    <RouteGeneralSettingsForm data={formData} />
  );
}
