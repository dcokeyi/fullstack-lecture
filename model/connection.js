const mysql = require('mysql');
const dotenv = require('dotenv')
dotenv.config();

const databaseVariables = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "sql learning"
})

module.exports = databaseVariables;