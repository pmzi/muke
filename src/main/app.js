const moduleAlias = require('module-alias');

moduleAlias();

const registerAllListeners = require('@src/listeners');

module.exports = function app() {
  registerAllListeners();
};
