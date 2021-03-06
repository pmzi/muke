// Workspace-related channels
const WORKSPACE_PREFIX = 'WORKSPACE';
export const CREATE_WORKSPACE = `${WORKSPACE_PREFIX}/CREATE`;
export const GET_ALL_WORKSPACES = `${WORKSPACE_PREFIX}/GET_ALL`;
export const GET_WORKSPACE = `${WORKSPACE_PREFIX}/GET`;
export const DELETE_WORKSPACE = `${WORKSPACE_PREFIX}/DELETE`;
export const EDIT_WORKSPACE = `${WORKSPACE_PREFIX}/EDIT`;
export const RUN_WORKSPACE = `${WORKSPACE_PREFIX}/RUN`;
export const STOP_WORKSPACE = `${WORKSPACE_PREFIX}/STOP`;
export const GET_ALL_ROUTES_WORKSPACE = `${WORKSPACE_PREFIX}/GET_ALL_ROUTES`;

// Route Group
const ROUTE_GROUP_PREFIX = 'ROUTE_GROUP';
export const CREATE_ROUTE_GROUP = `${ROUTE_GROUP_PREFIX}/CREATE`;
export const DELETE_ROUTE_GROUP = `${ROUTE_GROUP_PREFIX}/DELETE`;
export const EDIT_ROUTE_GROUP = `${ROUTE_GROUP_PREFIX}/EDIT`;
export const CHANGE_ORDER_ROUTE_GROUP = `${ROUTE_GROUP_PREFIX}/CHANGE_ORDER`;

// Route
const ROUTE_PREFIX = 'ROUTE';
export const CREATE_ROUTE = `${ROUTE_PREFIX}/CREATE`;
export const DELETE_ROUTE = `${ROUTE_PREFIX}/DELETE`;
export const EDIT_ROUTE = `${ROUTE_PREFIX}/EDIT`;
export const CHANGE_ORDER_ROUTE = `${ROUTE_PREFIX}/CHANGE_ORDER`;
export const GET_ROUTES = `${ROUTE_PREFIX}/GET_ROUTES`;
export const GET_ROUTE = `${ROUTE_PREFIX}/GET_ROUTE`;

// Timeline
const TIMELINE_PREFIX = 'TIMELINE';
export const TIMELINE_RECEIVE = `${TIMELINE_PREFIX}/RECEIVE`;
export const TIMELINE_REQ_STATUS_CHANGE = `${TIMELINE_PREFIX}/REQ_STATUS_CHANGE`;
export const GET_TIMELINE_REQUEST_DETAILS = `${TIMELINE_PREFIX}/GET_TIMELINE_REQUEST_DETAILS`;

// On Demand Response
const ON_DEMAND_RESPONSE_PREFIX = 'ON_DEMAND_RESPONSE';
export const ON_REQUEST_WITH_ON_DEMAND_RESPONSE = `${ON_DEMAND_RESPONSE_PREFIX}/ON_REQUEST_WITH_ON_DEMAND_RESPONSE`;
export const GET_ON_DEMAND_RESPONSE_DETAILS = `${ON_DEMAND_RESPONSE_PREFIX}/GET_ON_DEMAND_RESPONSE_DETAILS`;
export const ON_DEMAND_REQUEST_RESPOND = `${ON_DEMAND_RESPONSE_PREFIX}/ON_DEMAND_REQUEST_RESPOND`;
export const ON_DEMAND_REQUEST_PROXY = `${ON_DEMAND_RESPONSE_PREFIX}/ON_DEMAND_REQUEST_PROXY`;
