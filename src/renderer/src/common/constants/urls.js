export const WORKSPACE = (id) => `/workspace/${id}`;

export const ROUTE = ({
  workspaceId, routeId,
}) => `${WORKSPACE(workspaceId)}/workspace/${routeId}`;
