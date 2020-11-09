const { ipcMain } = require('electron');

exports.listen = function listen(eventName, cb) {
  ipcMain.on(eventName, (event, ...args) => {
    const res = {
      success(channel, data) {
        event.reply(channel, {
          status: 'success',
          body: data,
        });
      },
      error(channel, data) {
        event.reply(channel, {
          status: 'error',
          body: data,
        });
      },
    };

    cb(res, ...args);
  });
};
