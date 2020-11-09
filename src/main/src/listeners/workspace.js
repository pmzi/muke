const { CREATE_WORKSPACE } = require('@shared/constants/listenerPaths');

module.exports = function registerListeners({ listen }) {
  listen(CREATE_WORKSPACE, (event) => {
    event.reply(CREATE_WORKSPACE, {
      bar: 'foo1',
    });
  });
};
