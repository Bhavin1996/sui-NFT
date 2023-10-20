const { Sequelize } = require("sequelize");

let POSTGRESQL_DB_URI = "postgres://fnqemybh:QJAz5LQY3Gl9OKdrUbOYqJaVmJC6FVTA@flora.db.elephantsql.com/fnqemybh"

const sequelize = new Sequelize(process.env.POSTGRESQL_DB_URI)

const testDbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = { sq: sequelize, testDbConnection };

const { sq } = require("../config/db");
 
 
const { DataTypes } = require("sequelize");

const NFTUser = sq.define("User", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },

  fullName: {
    type: DataTypes.STRING,
  },
});

NFTUser.sync().then(() => {
  console.log("User Model synced");
});

module.exports = NFTUser;