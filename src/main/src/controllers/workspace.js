const Workspace = require('@models/Workspace');

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

  async deleteWorkspace(id) {
    await Workspace.destroy({
      where: {
        id,
      },
    });
  },

  async getWorkspaceInfo(id) {
    const workspaceInfo = await Workspace.find({
      where: {
        id,
      },
    });

    return workspaceInfo;
  },

  async editWorkspaceInfo({
    id, name, address, port, proxy,
  }) {
    await Workspace.update({
      name, address, port, proxy,
    }, { where: { id } });
  },

  async getAllWorkspaces() {
    const allWorkspaces = await Workspace.findAll();

    return allWorkspaces;
  },
};
