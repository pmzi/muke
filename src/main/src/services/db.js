import Sequelize from 'sequelize';

export default new Sequelize({
  dialect: 'sqlite',
  storage: 'path/to/database.sqlite',
});
