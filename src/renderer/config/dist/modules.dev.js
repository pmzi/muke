"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var fs = require('fs');

var path = require('path');

var chalk = require('react-dev-utils/chalk');

var resolve = require('resolve');

var paths = require('./paths');
/**
 * Get additional module paths based on the baseUrl of a compilerOptions object.
 *
 * @param {Object} options
 */


function getAdditionalModulePaths() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var baseUrl = options.baseUrl; // We need to explicitly check for null and undefined (and not a falsy value) because
  // TypeScript treats an empty string as `.`.

  if (baseUrl == null) {
    // If there's no baseUrl set we respect NODE_PATH
    // Note that NODE_PATH is deprecated and will be removed
    // in the next major release of create-react-app.
    var nodePath = process.env.NODE_PATH || '';
    return nodePath.split(path.delimiter).filter(Boolean);
  }

  var baseUrlResolved = path.resolve(paths.appPath, baseUrl); // We don't need to do anything if `baseUrl` is set to `node_modules`. This is
  // the default behavior.

  if (path.relative(paths.appNodeModules, baseUrlResolved) === '') {
    return null;
  } // Allow the user set the `baseUrl` to `appSrc`.


  if (path.relative(paths.appSrc, baseUrlResolved) === '') {
    return [paths.appSrc];
  } // If the path is equal to the root directory we ignore it here.
  // We don't want to allow importing from the root directly as source files are
  // not transpiled outside of `src`. We do allow importing them with the
  // absolute path (e.g. `src/Components/Button.js`) but we set that up with
  // an alias.


  if (path.relative(paths.appPath, baseUrlResolved) === '') {
    return null;
  } // Otherwise, throw an error.


  throw new Error(chalk.red.bold("Your project's `baseUrl` can only be set to `src` or `node_modules`." + ' Create React App does not support other values at this time.'));
}
/**
 * Get webpack aliases based on the baseUrl of a compilerOptions object.
 *
 * @param {*} options
 */


function getWebpackAliases() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var baseUrl = options.baseUrl;

  if (!baseUrl) {
    return {};
  }

  var baseUrlResolved = path.resolve(paths.appPath, baseUrl);

  if (path.relative(paths.appPath, baseUrlResolved) === '') {
    var convertedPaths = {};
    Object.entries(options.paths).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          _ref2$ = _slicedToArray(_ref2[1], 1),
          value = _ref2$[0];

      var valueWithoutWildCards = value.replace(/\/?\*/g, '');
      var keyWithoutWildCards = key.replace(/\/?\*/g, '');
      convertedPaths[keyWithoutWildCards] = path.resolve(baseUrlResolved, valueWithoutWildCards);
    });
    return _objectSpread({
      src: paths.appSrc
    }, convertedPaths);
  }
}
/**
 * Get jest aliases based on the baseUrl of a compilerOptions object.
 *
 * @param {*} options
 */


function getJestAliases() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var baseUrl = options.baseUrl;

  if (!baseUrl) {
    return {};
  }

  var baseUrlResolved = path.resolve(paths.appPath, baseUrl);

  if (path.relative(paths.appPath, baseUrlResolved) === '') {
    return {
      '^src/(.*)$': '<rootDir>/src/$1'
    };
  }
}

function getModules() {
  // Check if TypeScript is setup
  var hasTsConfig = fs.existsSync(paths.appTsConfig);
  var hasJsConfig = fs.existsSync(paths.appJsConfig);

  if (hasTsConfig && hasJsConfig) {
    throw new Error('You have both a tsconfig.json and a jsconfig.json. If you are using TypeScript please remove your jsconfig.json file.');
  }

  var config; // If there's a tsconfig.json we assume it's a
  // TypeScript project and set up the config
  // based on tsconfig.json

  if (hasTsConfig) {
    var ts = require(resolve.sync('typescript', {
      basedir: paths.appNodeModules
    }));

    config = ts.readConfigFile(paths.appTsConfig, ts.sys.readFile).config; // Otherwise we'll check if there is jsconfig.json
    // for non TS projects.
  } else if (hasJsConfig) {
    config = require(paths.appJsConfig);
  }

  config = config || {};
  var options = config.compilerOptions || {};
  var additionalModulePaths = getAdditionalModulePaths(options);
  return {
    additionalModulePaths: additionalModulePaths,
    webpackAliases: getWebpackAliases(options),
    jestAliases: getJestAliases(options),
    hasTsConfig: hasTsConfig
  };
}

module.exports = getModules();