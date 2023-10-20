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
const { Sequelize } = require("sequelize");
let POSTGRESQL_DB_URI = "postgres://fnqemybh:QJAz5LQY3Gl9OKdrUbOYqJaVmJC6FVTA@flora.db.elephantsql.com/fnqemybh";
const sequelize = new Sequelize(process.env.POSTGRESQL_DB_URI);
const testDbConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield sequelize.authenticate();
        console.log("Connection has been established successfully.");
    }
    catch (error) {
        console.error("Unable to connect to the database:", error);
    }
});
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
