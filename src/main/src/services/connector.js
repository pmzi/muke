const { ipcMain } = require('electron');

exports.listen = function listen(eventName, cb) {
  ipcMain.on(eventName, cb);
};
