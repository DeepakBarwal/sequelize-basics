const { Sequelize } = require('sequelize');
const DataTypes = Sequelize.DataTypes;

const db = new Sequelize('sampledb', 'myuser', 'mypass', {
  host: 'localhost',
  dialect: 'mysql',
});

const Student = db.define('student', {
  name: {
    type: DataTypes.STRING(40),
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER(2),
    defaultValue: -1,
    allowNull: false,
  },
});

module.exports = {
  db,
  Student,
};
