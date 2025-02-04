# Dự án Node.js Base cho Minecraft Server: MineClub và ShineLord Network

Dự án này là một **nền tảng (base)** được phát triển bằng Node.js, dùng để hỗ trợ và quản lý **Minecraft Server**. Nó được thiết kế để phát triển cho cộng đồng **MineClub** và **ShineLord Network**.


## Tính năng chính của base

### Quản lý người dùng
- **Đăng ký tài khoản**: Người dùng có thể đăng ký tài khoản mới để truy cập vào hệ thống.
- **Đăng nhập**: Hỗ trợ đăng nhập bằng tài khoản đã đăng ký.
- **Nạp thẻ**: Tích hợp hệ thống nạp thẻ để người dùng có thể mua vật phẩm, VIP, hoặc các dịch vụ khác.

### Hiển thị thông tin
- **Bảng xếp hạng**: Hiển thị bảng xếp hạng người chơi dựa trên các tiêu chí như điểm số, thời gian chơi, hoặc thành tích...
- **Server nổi bật**: Hiển thị các server nổi bật trong hệ thống để thu hút người chơi.
- **Network hỗ trợ nhiều máy chủ**: Cho phép hiển thị và quản lý nhiều máy chủ (servers) trong cùng một network.

### Mở rộng
- **Đổi mật khẩu**: Tính năng đổi mật khẩu (lưu ý: người dùng phải đăng nhập vào web mới có thể đổi mật khẩu).
- **Dễ dàng mở rộng**: Cấu trúc mã nguồn được thiết kế rõ ràng, giúp bạn dễ dàng thêm các tính năng mới.
- **Shop Web**: Người dùng có thể mua vật phẩm thông qua website.

## Cài đặt

Để cài đặt và chạy dự án, làm theo các bước sau:

1. **Clone repository** từ GitHub:

   ```bash
   git clone https://github.com/anlongawf/baseMcWeb
2. **Di chuyển vào thư mục dự án:**
    ```bash
    cd basemcweb
3. **Cài đặt các dependencies bằng npm:**
    ```bash
    npm install
3. **Chạy dự án:**

    ```bash
    npm start
4. **Hoặc nếu bạn muốn chạy ở chế độ development với nodemon (đã setup trong package.json):**

    ```bash
    npm run dev
5. **Cấu hình**
Trước khi chạy dự án, hãy đảm bảo bạn đã cấu hình các thông tin cần thiết trong file .env:
    DATABASE_HOST=localhost
    DATABASE_PORT=3307
    DATABASE_USER=andepzai
    DATABASE_PASSWORD=123456
    DATABASE_NAME=database


Special Thanks

MineClub: ...

ShineLord Network: Cảm ơn ShineLord Network đã tạo điều kiện để dự án được hoàn thiện.

Những người đóng góp: Cảm ơn tất cả những người đã đóng góp mã nguồn, ý tưởng và hỗ trợ kỹ thuật.

Liên hệ
Nếu bạn có bất kỳ câu hỏi hoặc góp ý nào, vui lòng liên hệ qua email: 

Lưu ý: Dự án này không phải là public và chỉ được sử dụng nội bộ. Vui lòng không chia sẻ hoặc sử dụng mã nguồn mà không có sự cho phép.

Lưu ý thêm: Đây chỉ là Base. Nếu bạn là thành viên của MineClub, vui lòng truy cập GitHub MineClub để sử dụng phiên bản dành riêng cho MineClub. Ngược lại, nếu bạn là thành viên của ShineLord Network, vui lòng truy cập GitHub ShineLord để sử dụng phiên bản dành riêng cho ShineLord.


