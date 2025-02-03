# Dự án Node.js Base cho Minecraft Server: MineClub và ShineLord Network

Dự án này là một **nền tảng (base)** được phát triển bằng Node.js, dùng để hỗ trợ và quản lý **Minecraft Server**. Nó được thiết kế để làm cơ sở cho các cộng đồng **MineClub** và **ShineLord Network**, giúp họ dễ dàng mở rộng và tùy chỉnh theo nhu cầu riêng.

> **Lưu ý quan trọng**: Dự án này **không phải là public** (không công khai) và chỉ được sử dụng nội bộ cho **MineClub** và **ShineLord Network**. Vui lòng không chia sẻ mã nguồn hoặc sử dụng cho mục đích cá nhân mà không có sự cho phép.

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
- **Đổi mật khẩu**: Tính năng đổi mật khẩu (lưu ý đã đăng nhập vào web mới đổi được)
- **Dễ dàng mở rộng**: Cấu trúc mã nguồn được thiết kế rõ ràng, giúp bạn dễ dàng thêm các tính năng mới.

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
4. **Chạy dự án:**
    ```bash
    Chạy dự án:
5.  **Hoặc nếu bạn muốn chạy ở chế độ development với nodemon (Setup trong package nha!):**
    npm run dev
