import React, { useCallback } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { ROUTE } from '@common/constants/urls';

import WorkspaceListMenu from './WorkspaceListMenu';

export default function WorkspaceList() {
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
    <WorkspaceListMenu goToRoute={goToRoute} />
  );
}
