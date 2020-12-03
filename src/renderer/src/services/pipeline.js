// eslint-disable-next-line import/no-extraneous-dependencies
import { ipcRenderer } from 'electron';

function on(channel, cb) {
  ipcRenderer.on(channel, (e, ...args) => cb(...args));
  return () => ipcRenderer.removeListener(channel, cb);
}

export default {
  on,
};
