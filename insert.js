const { db, Student } = require('./model');

const task = async () => {
  try {
    await db.sync({ alter: true });
    // Insert a student
    // build + sync

    for (let i = 0; i < 30; i++) {
      await Student.create({
        name: ['Monu', 'Chawanni', 'Munshi', 'Hapsi', 'Golu', 'Chomu'][
          parseInt(Math.random() * 6)
        ],
        age: 10 + parseInt(Math.random() * 10),
      });
    }
  } catch (e) {
    console.error(e);
  }
};

task();

// db.sync({ alter: true })
//   .then(() => console.log('DB Synchronised'))
//   .catch(console.error);
