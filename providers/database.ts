const { Sequelize, DataTypes } = require("sequelize");

let POSTGRESQL_DB_URI = "jdbc:postgresql://localhost:5432/postgres"

//const sequelize = new Sequelize(POSTGRESQL_DB_URI)

const sequelize = new Sequelize('postgres', 'postgres', '9530',{
    host: 'localhost',
    dialect: 'postgres'
  });
  
  const User = sequelize.define("user", {
    name: DataTypes.TEXT,
    favoriteColor: {
      type: DataTypes.TEXT,
      defaultValue: 'green'
    },
    age: DataTypes.INTEGER,
    cash: DataTypes.INTEGER
  });
  
  (async () => {
    await sequelize.sync({ force: true });
    // Code here
    const jane = User.build({ name: "Jane" });
console.log(jane instanceof User); // true
console.log(jane.name); // "Jane"
await jane.save();
console.log('Jane was saved to the database!');
  })();