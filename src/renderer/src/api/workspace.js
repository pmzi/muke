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

export default {
  createWorkspace,
  getAllWorkspaces,
};
