const { ipcMain } = require('electron');

exports.listen = function listen(eventName, cb) {
  ipcMain.on(eventName, (event, ...args) => {
    const res = {
      success(data) {
        event.reply(eventName, {
          status: 'success',
          body: data,
        });
      },
      error(data) {
        event.reply(eventName, {
          status: 'error',
          body: data,
        });
      },
    };

    cb(res, ...args);
  });
};
