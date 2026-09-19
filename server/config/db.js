const mysql = require('mysql2');

// Use environment variables to configure the database connection
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'mysql',  // 'mysql' is the service name used in docker-compose.yml
  user: process.env.DB_USER || 'root',       // MySQL user
  password: process.env.DB_PASSWORD || 'password', // MySQL password
  database: process.env.DB_NAME || 'test_db', // MySQL database name
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    process.exit(1);
  }
  console.log('Connected to the database.');
});

module.exports = db;

