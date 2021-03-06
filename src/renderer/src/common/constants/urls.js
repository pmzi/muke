export const BASE_URL = window.location.origin;

export const HOME = '/';
export const WORKSPACE = (id) => `/workspace/${id}`;

export const ROUTE = ({
  workspaceId, routeId,
}) => `${WORKSPACE(workspaceId)}/${routeId}`;

export const INSPECT = (serverId) => `/inspect/${serverId}`;

export const INSPECT_REQUEST_DETAIL = ({
  serverId,
  id,
}) => `${INSPECT(serverId)}/request/${id}`;

export const ON_DEMAND_RESPONSE = (id) => `/on-demand/${id}`;
