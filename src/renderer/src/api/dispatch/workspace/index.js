import {
  CREATE_WORKSPACE, GET_ALL_WORKSPACES, GET_WORKSPACE, DELETE_WORKSPACE, EDIT_WORKSPACE,
} from '@common/constants/channels';
import dispatch from '@services/dispatch';
import { transformStateNumberToText, transformStateTextToNumber } from './transformers/stateTransformer';

function createWorkspace({
  name, address, port, proxy,
}) {
  return dispatch(CREATE_WORKSPACE, {
    name, address, port, proxy,
  });
}

function getAllWorkspaces() {
  return dispatch(GET_ALL_WORKSPACES);
}

function getWorkspaceInfo(id) {
  return dispatch(GET_WORKSPACE, { id }).then(({ state, ...data }) => ({
    state: transformStateNumberToText(state),
    ...data,
  }));
}

function deleteWorkspace(id) {
  return dispatch(DELETE_WORKSPACE, { id });
}

function changeWorkspaceState({ id, state }) {
  return dispatch(EDIT_WORKSPACE, { id, state: transformStateTextToNumber(state) });
}

export default {
  createWorkspace,
  getAllWorkspaces,
  getWorkspaceInfo,
  deleteWorkspace,
  changeWorkspaceState,
};
