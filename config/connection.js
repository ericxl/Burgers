// Import packages
let mysql = require("mysql");

// For testing on localhost
var config_localhost = {
    "host"    : "localhost",
    "port"    : 3306,
    "user"    : "root",
    "password": "",
    "database": "burgers_db"
};

// Connect to database
var conn = mysql.createPool(process.env.JAWSDB_URL || config_localhost);

module.exports = conn;