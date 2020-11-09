const moduleAlias = require('module-alias');

moduleAlias();

const registerAllListeners = require('@src/listeners');
const model = require('@models');

module.exports = async function app() {
  await model.init();

  registerAllListeners();
};
