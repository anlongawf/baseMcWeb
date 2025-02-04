import 'dotenv/config';
import express from 'express';
import webRouter from './src/routes/web.js';
import configViewEngine from './src/config/viewEngine.js';
import database from './src/config/database.js';

// Connect db
// async function connectDatabase() {
//     try {
//         const conn = await database.getConnection();
//         console.log('Kết nối database thành công');
//         conn.release(); // Giải phóng kết nối sau khi sử dụng
//     } catch (err) {
//         console.error('Lỗi kết nối database:', err);
//     }
// }

async function connectDatabase() {
    try {
        const conn = await database.getConnection();
        console.log("Connected Authme Database")
        conn.release();
    } catch(err) {
        console.error('Connect fail Authme Database')
    }
}

const app = express();

// Config Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Config Template Ejs
configViewEngine(app);


// Config Routers
app.use('', webRouter);

// Debug
// app.use((req, res, next) => {
//     console.log('Global Middleware Logging:');
//     console.log('Request Method:', req.method);
//     console.log('Request Path:', req.path);
//     console.log('Request Headers:', req.headers);
//     console.log('Request Body:', req.body);
//     next();
// });

app.listen(3000, () => {
    console.log('Server đang chạy trên cổng 3000');
});
