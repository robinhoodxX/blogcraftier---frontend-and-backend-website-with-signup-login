const mysql = require("mysql2");

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",       // your MySQL username
  password: "", // your MySQL password
  database: "myapp",   // your database name
});

// Connect to database warning handling
db.connect(err => {
  if (err) {
    console.error("Database connection failed:", err);
    process.exit(1); // stop server
  }
  console.log("Connected to MySQL database");
});

module.exports = db;