require("dotenv").config();
const mariadb = require("mariadb");

const pool = mariadb.createPool({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    port: process.env.DATABASE_PORT,
    connectionLimit: 10,  
    acquireTimeout: 20000,
});

pool.getConnection()
    .then(conn => {
        console.log("Đã kết nối Database!");
        conn.release(); 
    })
    .catch(err => {
        console.error("Không thể kết nối Database:", err);
    });

module.exports = pool;
