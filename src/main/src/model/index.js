const db = require('@src/services/db');

exports.init = async function initialize() {
  await db.sync();
};
