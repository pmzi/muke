// eslint-disable-next-line import/no-extraneous-dependencies
import { ipcRenderer } from 'electron';

export default function dispatcher(eventName, data) {
  return new Promise((resolve) => {
    ipcRenderer.send(eventName, data);

    ipcRenderer.once(eventName, (e, ...args) => resolve(...args));
  });
}
