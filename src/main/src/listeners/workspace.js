const { CREATE_WORKSPACE } = require('@shared/constants/listenerPaths');

const workspaceController = require('@controllers/workspace');

module.exports = function registerListeners({ listen }) {
  listen(CREATE_WORKSPACE, async (event, {
    name, address, port, proxy,
  }) => {
    const newWorkspace = await workspaceController.createWorkspace({
      name, address, port, proxy,
    });

    event.reply(CREATE_WORKSPACE, newWorkspace.toJSON());
  });
};
