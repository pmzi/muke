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
    const workspaceInfo = await Workspace.findByPk(id, { raw: true });

    return workspaceInfo;
  },

  async editWorkspaceInfo({
    id, ...infoToEdit
  }) {
    await Workspace.update(infoToEdit, { where: { id } });
  },

  async getAllWorkspaces() {
    const allWorkspaces = await Workspace.findAll({ raw: true });

    return allWorkspaces;
  },
};
