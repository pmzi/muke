import React, { useCallback } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { ROUTE } from '@common/constants/urls';
import { useGetRoutes, useChangeRoutesOrders } from '@common/hooks/dataHooks';
import RouteListMenuContainer from './RouteListMenuContainer';
import RouteListLoading from './RouteListLoading';

export default function RouteList() {
  const history = useHistory();
  const { workspace } = useParams();
  const { data, isLoading } = useGetRoutes(workspace);
  const [changeRoutesOrders] = useChangeRoutesOrders();

  const goToRoute = useCallback((id) => {
    history.push(ROUTE(
      {
        workspaceId: workspace,
        routeId: id,
      },
    ));
  }, [workspace]);

  function onItemsChanged(changedDescription) {
    changeRoutesOrders(changedDescription);
  }

  if (isLoading) return <RouteListLoading />;

  return (
    <RouteListMenuContainer items={data} goToRoute={goToRoute} onItemsChanged={onItemsChanged} />
  );
}
