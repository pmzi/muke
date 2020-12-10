export default function swapKeyValuesToNewObject(map) {
  const newObject = {};
  Object.entries(map).forEach(([key, value]) => {
    newObject[value] = key;
  });
  return newObject;
}
