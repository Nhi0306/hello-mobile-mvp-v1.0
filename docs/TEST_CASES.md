# Test cases — Hello Mobile MVP v1.0

## Thông tin môi trường

| Mục | Giá trị |
|---|---|
| Thiết bị | ______________________________ |
| Hệ điều hành | Android ___ / iOS ___ |
| Phiên bản Expo Go | ______________________________ |
| Expo SDK | 58 |
| Ngày kiểm thử | ______________________________ |
| Người kiểm thử | ______________________________ |

## Điều kiện trước khi test

- Đã chạy `npm install` và `npx expo start` thành công.
- Điện thoại và máy tính cùng mạng Wi-Fi.
- Ứng dụng mở được trong Expo Go, không có red screen.

## Kịch bản kiểm thử

| Mã | Kịch bản | Các bước | Kết quả mong đợi | Kết quả | Ghi chú |
|---|---|---|---|---|---|
| TC01 | Khởi động ứng dụng | Mở app từ Expo Go | Hiển thị tiêu đề **Hello Mobile MVP**, ô nhập tên, 2 nút và lời chào `Hello, World!` | ☐ PASS ☐ FAIL | |
| TC02 | Lời chào mặc định | Không nhập gì, quan sát màn hình | Khung lời chào hiển thị `Hello, World!` | ☐ PASS ☐ FAIL | |
| TC03 | Chào với tên hợp lệ | Nhập `Nhi` → bấm **Chào** | Hiển thị `Hello, Nhi!` | ☐ PASS ☐ FAIL | |
| TC04 | Bỏ trống tên | Xóa hết ô nhập → bấm **Chào** | Hiển thị `Hello, World!` | ☐ PASS ☐ FAIL | |
| TC05 | Chỉ nhập khoảng trắng | Nhập `   ` → bấm **Chào** | Hiển thị `Hello, World!`, không có khoảng trắng thừa | ☐ PASS ☐ FAIL | |
| TC06 | Cắt khoảng trắng đầu/cuối | Nhập `  Nhi  ` → bấm **Chào** | Hiển thị `Hello, Nhi!` | ☐ PASS ☐ FAIL | |
| TC07 | Giới hạn độ dài | Nhập liên tục hơn 40 ký tự | Ô nhập dừng ở 40 ký tự | ☐ PASS ☐ FAIL | |
| TC08 | Tên dài xuống dòng | Nhập tên dài 40 ký tự → bấm **Chào** | Lời chào xuống dòng gọn, không tràn ra ngoài card | ☐ PASS ☐ FAIL | |
| TC09 | Đặt lại | Nhập tên → bấm **Chào** → bấm **Đặt lại** | Ô nhập trống, lời chào trở về `Hello, World!` | ☐ PASS ☐ FAIL | |
| TC10 | Gửi bằng bàn phím | Nhập `Nhi` → nhấn **Done/Enter** trên bàn phím | Lời chào cập nhật thành `Hello, Nhi!`, bàn phím đóng | ☐ PASS ☐ FAIL | |
| TC11 | Bàn phím không che nút | Chạm ô nhập để mở bàn phím | Vẫn nhìn thấy và bấm được nút **Chào**, **Đặt lại** | ☐ PASS ☐ FAIL | |
| TC12 | Màn hình nhỏ | Chạy trên máy có chiều rộng ~320–360 dp | Bố cục không tràn ngang, nội dung cuộn được nếu thiếu chỗ | ☐ PASS ☐ FAIL | |
| TC13 | Xoay màn hình | Xoay điện thoại ngang | App giữ hướng dọc theo cấu hình `orientation: portrait` | ☐ PASS ☐ FAIL | |
| TC14 | Accessibility | Bật TalkBack (Android) / VoiceOver (iOS), vuốt qua các phần tử | Đọc được nhãn ô nhập, nút Chào, nút Đặt lại và lời chào | ☐ PASS ☐ FAIL | |
| TC15 | Không lỗi console | Mở Metro terminal / DevTools | Không có red screen, không có warning bất thường khi thao tác | ☐ PASS ☐ FAIL | |
| TC16 | Hot reload | Sửa một chữ trong `App.js` → lưu | App tự cập nhật trong vài giây | ☐ PASS ☐ FAIL | |

## Minh chứng cần nộp

- [ ] Ảnh chụp màn hình mặc định (`Hello, World!`)
- [ ] Ảnh chụp sau khi nhập tên và bấm **Chào**
- [ ] Ảnh chụp sau khi bấm **Đặt lại**
- [ ] Ảnh terminal `npx expo start` đang chạy
- [ ] Bảng kết quả trên đã điền đầy đủ

## Kết luận

- Tổng số case: **16**
- PASS: ______ / 16
- FAIL: ______ / 16
- Ghi chú / lỗi còn tồn tại:

______________________________________________________________________________
