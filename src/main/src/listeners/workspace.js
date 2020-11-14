const {
  CREATE_WORKSPACE, DELETE_WORKSPACE, GET_WORKSPACE, GET_ALL_WORKSPACES, EDIT_WORKSPACE,
} = require('@shared/constants/listenerChannels');

const workspaceController = require('@controllers/workspace');

module.exports = function registerListeners({ listen }) {
  listen(CREATE_WORKSPACE, async (res, {
    name, address, port, proxy,
  }) => {
    const newWorkspace = await workspaceController.createWorkspace({
      name, address, port, proxy,
    });

    res.success(newWorkspace.toJSON());
  });

  listen(DELETE_WORKSPACE, async (res, { id }) => {
    await workspaceController.deleteWorkspace(id);

    res.success();
  });

  listen(GET_WORKSPACE, async (res, { id }) => {
    const workspaceInfo = await workspaceController.getWorkspaceInfo(id);

    res.success(workspaceInfo.toJSON());
  });

  listen(GET_ALL_WORKSPACES, async (res) => {
    const workspaces = await workspaceController.getAllWorkspaces();

    res.success(workspaces.toJSON());
  });

  listen(EDIT_WORKSPACE, async (res, {
    id, name, address, port, proxy,
  }) => {
    await workspaceController.editWorkspaceInfo({
      id, name, address, port, proxy,
    });

    res.success();
  });
};
