import PropTypes from 'prop-types';

function capitalizeFirstChar(value) {
  const valueArray = value.split('');
  return `${valueArray.shift().toUpperCase()}${valueArray.join('')}`;
}

export default function createController(name) {
  const firstCharCapitalizedName = capitalizeFirstChar(name);

  let listeners = [];

  return {
    [name]() {
      listeners.forEach((listener) => listener());
    },
    [`on${firstCharCapitalizedName}`](listener) {
      listeners.push(listener);
    },
    [`removeOn${firstCharCapitalizedName}`](listener) {
      listeners = listeners.filter((insideListener) => listener !== insideListener);
    },
  };
}

export function controllerPropType(name) {
  const firstCharCapitalizedName = capitalizeFirstChar(name);
  return PropTypes.shape({
    [`on${firstCharCapitalizedName}`]: PropTypes.func.isRequired,
    [`removeOn${firstCharCapitalizedName}`]: PropTypes.func.isRequired,
  });
}
