

const mysql = require("mysql2");
require("dotenv").config();

const pool = mysql.createPool({
  socketPath: process.env.SOCKETPATH,
  user: process.env.USERS,
  database: process.env.DATABASE,
  host: process.env.HOST,
  password: process.env.PASSWORD,
  connectionLimit: 10,
});

pool.getConnection(function (err, connection) {
  if (err) {
    console.error("Database connection error:", err);
  } else {
    console.log("Database Connected!!");

    let user = `CREATE TABLE if not exists user(
      user_id int auto_increment,
      user_name varchar(255) not null,
      user_password varchar(255) not null,
      PRIMARY KEY (user_id)
    )`;

    let todo = `CREATE TABLE if not exists todo(
      todo_id int auto_increment,
      todoTask varchar(255) not null,
      note VARCHAR(255) not null,
      date DATE,
      user_id int not null,
      completed BOOLEAN DEFAULT false,
      PRIMARY KEY (todo_id),
      FOREIGN KEY (user_id) REFERENCES user(user_id)
    )`;

    pool.query(user, (err, results) => {
      if (err) {
        console.error("Error creating user table:", err);
      } else {
        console.log("User table created");
      }
    });

    pool.query(todo, (err, results) => {
      if (err) {
        console.error("Error creating todo table:", err);
      } else {
        console.log("Todo table created");
      }
    });

    // Release the connection after using it
    connection.release();
  }
});

module.exports = pool;
