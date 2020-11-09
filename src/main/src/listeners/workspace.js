const { CREATE_WORKSPACE } = require('@shared/constants/listenerPaths');
const Workspace = require('@model/Workspace');

module.exports = function registerListeners({ listen }) {
  Workspace.create({
    name: 'name',
    address: 'address',
    port: 10,
    proxy: 'proxy',
  }).then(console.log).catch(console.log);
  listen(CREATE_WORKSPACE, (event) => {
    event.reply(CREATE_WORKSPACE, {
      bar: 'foo1',
    });
  });
};
