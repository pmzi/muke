import React, { useCallback } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { ROUTE } from '@common/constants/urls';

import RouteListMenu from './RouteListMenu';

export default function RouteList() {
  const history = useHistory();
  const { workspace } = useParams();

  const goToRoute = useCallback(() => {
    history.push(ROUTE(
      {
        workspaceId: workspace,
        routeId: 1,
      },
    ));
  }, [workspace]);

  return (
    <RouteListMenu goToRoute={goToRoute} />
  );
}
