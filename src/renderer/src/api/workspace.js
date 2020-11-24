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
      });
    }, 1500);
  });
  // return dispatch(GET_WORKSPACE);
}

export default {
  createWorkspace,
  getAllWorkspaces,
  getWorkspaceInfo,
};
