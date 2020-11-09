const { listen } = require('@services/connector');

const registerWorkspace = require('./workspace');

const options = {
  listen,
};

module.exports = function registerAllListeners() {
  registerWorkspace(options);
};
