import { CREATE_WORKSPACE } from '@common/constants/channels';
import dispatch from '@services/dispatch';

function createWorkspace({
  name, address, port, proxy,
}) {
  return dispatch(CREATE_WORKSPACE, {
    name, address, port, proxy,
  });
}

export default {
  createWorkspace,
};
