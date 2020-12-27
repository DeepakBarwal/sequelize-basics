const { Op } = require('sequelize');
const { db, Student } = require('./model');

const task = async () => {
  try {
    await db.sync();
    const students = await Student.findAll({
      where: { age: { [Op.gt]: 18 } },
      order: [
        ['age', 'DESC'],
        ['name', 'ASC'],
      ],
    });
    students.forEach((student) => console.log(student.dataValues));
  } catch (e) {
    console.error(e);
  }
};

task();
