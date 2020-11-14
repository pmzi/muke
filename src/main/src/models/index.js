const db = require('@src/services/db');
const { IS_DEVELOPMENT } = require('@src/config');

const Workspace = require('./Workspace');
const RouteGroup = require('./RouteGroup');
const Route = require('./Route');
const RouteItem = require('./RouteItem');
const RouteHeader = require('./RouteHeader');

exports.init = async function initialize() {
  // Initializing Relations
  Workspace.hasMany(RouteItem);
  RouteItem.belongsTo(Workspace);

  RouteItem.hasMany(Route);
  Route.belongsTo(RouteItem);

  RouteItem.hasMany(RouteGroup);
  RouteGroup.belongsTo(RouteItem);

  RouteItem.hasMany(RouteItem);

  RouteHeader.belongsTo(Route);

  await db.sync({ force: IS_DEVELOPMENT });
};
