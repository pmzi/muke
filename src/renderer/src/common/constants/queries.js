// Workspace-related queries
const WORKSPACE_PREFIX = 'WORKSPACE';
export const GET_ALL_WORKSPACES = `${WORKSPACE_PREFIX}/GET_ALL`;
export const GET_WORKSPACE = `${WORKSPACE_PREFIX}/GET`;
export const RUN_WORKSPACE = `${WORKSPACE_PREFIX}/RUN`;
export const STOP_WORKSPACE = `${WORKSPACE_PREFIX}/STOP`;
export const GET_ALL_ROUTES_WORKSPACE = `${WORKSPACE_PREFIX}/GET_ALL_ROUTES`;

// Route Group
const ROUTE_GROUP_PREFIX = 'ROUTE_GROUP';
export const GET_ROUTE_GROUPS = `${ROUTE_GROUP_PREFIX}/GET_ROUTE_GROUPS`;

// Route
const ROUTE_PREFIX = 'ROUTE';
export const GET_ROUTES = `${ROUTE_PREFIX}/GET_ROUTES`;
export const GET_ROUTE = `${ROUTE_PREFIX}/GET_ROUTE`;

// Timeline
const TIMELINE_PREFIX = 'TIMELINE';
export const GET_TIMELINE_REQUEST_DETAILS = `${TIMELINE_PREFIX}/GET_TIMELINE_REQUEST_DETAILS`;

// On Demand Response
const ON_DEMAND_RESPONSE_PREFIX = 'ON_DEMAND_RESPONSE';
export const GET_ON_DEMAND_RESPONSE_DETAILS = `${ON_DEMAND_RESPONSE_PREFIX}/GET_ON_DEMAND_RESPONSE_DETAILS`;
