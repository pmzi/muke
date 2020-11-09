const db = require('@src/services/db');
const { IS_DEVELOPMENT } = require('@src/config');

const Workspace = require('./Workspace');
const RouteGroup = require('./RouteGroup');
const Route = require('./Route');

exports.init = async function initialize() {
  // Initializing Relations
  RouteGroup.hasMany(Route);
  Route.belongsTo(RouteGroup);

  Workspace.hasMany(RouteGroup);
  RouteGroup.belongsTo(Workspace);

  Workspace.hasMany(Route);
  Route.belongsTo(Workspace);

  await db.sync({ force: IS_DEVELOPMENT });
};
