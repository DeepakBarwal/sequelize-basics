const Sequelize = require('sequelize');

const db = new Sequelize('sampledb', 'myuser', 'mypass', {
  host: 'localhost',
  dialect: 'mysql',
});

db.authenticate()
  .then(() => console.log('connected'))
  .catch((err) => console.error(err));

module.exports = {
  db,
};
