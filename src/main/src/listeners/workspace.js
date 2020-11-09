const { CREATE_WORKSPACE } = require('@shared/constants/listenerChannels');

const workspaceController = require('@controllers/workspace');

module.exports = function registerListeners({ listen }) {
  listen(CREATE_WORKSPACE, async (res, {
    name, address, port, proxy,
  }) => {
    const newWorkspace = await workspaceController.createWorkspace({
      name, address, port, proxy,
    });

    res.success(CREATE_WORKSPACE, newWorkspace.toJSON());
  });
};
