const mysql = require('mysql2/promise');


const conn = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_user,
  password:process.env.MYSQL_password,
  database:process.env.MYSQL_database
});

module.exports = conn;