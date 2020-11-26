export default function createController(name) {
  const nameArray = name.split('');
  const capitalizedFirstCharName = `${nameArray.shift().toUpperCase()}${nameArray.join('')}`;

  let listeners = [];

  return {
    [name]() {
      listeners.forEach((listener) => listener());
    },
    [`on${capitalizedFirstCharName}`](listener) {
      listeners.push(listener);
    },
    [`removeOn${capitalizedFirstCharName}`](listener) {
      listeners = listeners.filter((insideListener) => listener !== insideListener);
    },
  };
}
