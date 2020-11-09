const Workspace = require('@src/model/Workspace');

module.exports = {
  async createWorkspace({
    name, address, port, proxy,
  }) {
    const workspaceData = await Workspace.create({
      name,
      address,
      port,
      proxy,
    });
    return workspaceData;
  },
};
