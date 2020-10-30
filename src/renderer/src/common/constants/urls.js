export const BASE_URL = window.location.origin;

export const WORKSPACE = (id) => `/workspace/${id}`;

export const ROUTE = ({
  workspaceId, routeId,
}) => `${WORKSPACE(workspaceId)}/workspace/${routeId}`;

export const INSPECT = (serverId) => `/inspect/${serverId}`;

export const INSPECT_REQUEST_DETAIL = ({
  serverId,
  id,
}) => `${INSPECT(serverId)}/request/${id}`;
