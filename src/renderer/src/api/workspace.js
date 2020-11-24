import { CREATE_WORKSPACE } from '@common/constants/channels';
import dispatch from '@services/dispatch';

function createWorkspace({
  name, address, port, proxy,
}) {
  return dispatch(CREATE_WORKSPACE, {
    name, address, port, proxy,
  });
}

function getAllWorkspaces() {
  return Promise.resolve([{
    id: 1,
    image: null,
  }]);
  // return dispatch(GET_ALL_WORKSPACES);
}

function getWorkspaceInfo(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'ServerName',
        id,
        address: 'localhost',
        proxy: 'http://proxy.to',
        port: 80,
        state: 'paused',
      });
    }, 1500);
  });
  // return dispatch(GET_WORKSPACE);
}

function deleteWorkspace(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id,
      });
    }, 1500);
  });
  // return dispatch(DELETE_WORKSPACE);
}

function changeWorkspaceState({ id, state }) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id,
        state,
      });
    }, 1500);
  });
  // return dispatch(DELETE_WORKSPACE);
}

export default {
  createWorkspace,
  getAllWorkspaces,
  getWorkspaceInfo,
  deleteWorkspace,
  changeWorkspaceState,
};
