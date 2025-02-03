import 'dotenv/config';
import express from 'express';
import webRouter from './src/routes/web.js';
import configViewEngine from './src/config/viewEngine.js';
import database from './src/config/database.js';

// Kết nối database
async function connectDatabase() {
    try {
        const conn = await database.getConnection();
        console.log('Kết nối database thành công');
        conn.release(); // Giải phóng kết nối sau khi sử dụng
    } catch (err) {
        console.error('Lỗi kết nối database:', err);
    }
}

// Gọi hàm kết nối
connectDatabase();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Config Template Ejs
configViewEngine(app);


// Config Routers
app.use('', webRouter);

// Khởi tạo controller
// Debug
// Sau các middleware hiện tại
app.use((req, res, next) => {
    console.log('Global Middleware Logging:');
    console.log('Request Method:', req.method);
    console.log('Request Path:', req.path);
    console.log('Request Headers:', req.headers);
    console.log('Request Body:', req.body);
    next();
});

// Lắng nghe trên cổng 3000 và hiển thị thông báo khi server đã sẵn sàng
app.listen(3000, () => {
    console.log('Server đang chạy trên cổng 3000');
});
