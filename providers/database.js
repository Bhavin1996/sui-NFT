"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { Sequelize, DataTypes } = require("sequelize");
let POSTGRESQL_DB_URI = "jdbc:postgresql://localhost:5432/postgres";
//const sequelize = new Sequelize(POSTGRESQL_DB_URI)
const sequelize = new Sequelize('postgres', 'postgres', '9530', {
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
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield sequelize.sync({ force: true });
    // Code here
    const jane = User.build({ name: "Jane" });
    console.log(jane instanceof User); // true
    console.log(jane.name); // "Jane"
    yield jane.save();
    console.log('Jane was saved to the database!');
}))();
