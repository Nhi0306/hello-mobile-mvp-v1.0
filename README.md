# Hello Mobile MVP v1.0

Ứng dụng di động tối giản minh họa chu trình **State → Event → Render** trong React Native:

> Nhập tên → bấm **Chào** → ứng dụng hiển thị `Hello, <tên>!`

Xây dựng bằng **Expo SDK 58 + React Native 0.88**, JavaScript thuần, không backend, không navigation.

## Chức năng MVP

- Hiển thị lời chào mặc định `Hello, World!`
- Nhập tên (tối đa 40 ký tự) và nhận lời chào cá nhân hóa
- Tự động cắt khoảng trắng đầu/cuối; bỏ trống thì quay về `Hello, World!`
- Nút **Đặt lại** xóa tên và lời chào
- Bàn phím không che nội dung; nhấn **Done** trên bàn phím cũng gửi lời chào
- Hỗ trợ safe area cho tai thỏ / thanh điều hướng
- Có nhãn accessibility cho ô nhập và các nút

Ngoài phạm vi MVP: đăng nhập, lưu dữ liệu, gọi API, navigation, calculator.

## Yêu cầu môi trường

| Công cụ | Yêu cầu |
|---|---|
| Node.js | `22.13+` hoặc `24.3+` (khuyến nghị Node 24 LTS) |
| npm | Đi kèm Node.js |
| Điện thoại | Android hoặc iPhone, cài **Expo Go** |
| Mạng | Điện thoại và máy tính cùng một mạng Wi-Fi |

Kiểm tra nhanh:

```powershell
node --version
npm --version
```

## Cài đặt và chạy

```powershell
cd D:\hust\web\hello-mobile-mvp-v1.0
npm install
npx expo start
```

Sau khi Metro khởi động:

1. **Android:** mở **Expo Go** → quét QR trong terminal.
2. **iPhone:** mở ứng dụng **Camera** → quét QR → mở bằng Expo Go.
3. Chờ bundle tải xong; ứng dụng hiển thị màn hình Hello.

### Nếu QR không kết nối được

- Kiểm tra điện thoại và máy tính cùng Wi-Fi (không dùng mạng khách / VPN).
- Cho phép **Node.js** đi qua Windows Firewall ở mạng riêng tư.
- Thử chế độ tunnel:

```powershell
npx expo start --tunnel
```

Lần đầu chạy tunnel, Expo có thể hỏi cài `@expo/ngrok`; đồng ý để tiếp tục.

### Lưu ý riêng cho iPhone (Expo Go)

Trên **iPhone thật**, Expo Go bắt buộc máy tính và điện thoại đăng nhập **cùng một tài khoản Expo** thì mới mở được project:

1. Tạo tài khoản miễn phí tại [expo.dev/signup](https://expo.dev/signup) nếu chưa có.
2. Trên máy tính, đăng nhập Expo CLI:

   ```powershell
   npx expo login
   npx expo whoami
   ```

3. Trong Expo Go trên iPhone: chạm **icon tài khoản** ở góc phải → đăng nhập cùng tài khoản.
4. Quay lại màn hình lỗi và bấm **Try Again**.

Nếu vừa đổi tài khoản, khởi động lại `npx expo start`. Lỗi này chỉ xảy ra với **iPhone thật**; Android, emulator và simulator không bị ảnh hưởng.

### Chạy trên emulator / web (tùy chọn)

```powershell
npm run android   # cần Android Studio + SDK + emulator
npm run web       # cần bổ sung web dependencies (xem bên dưới)
```

Bổ sung hỗ trợ web nếu cần xem nhanh trên trình duyệt:

```powershell
npx expo install react-dom react-native-web @expo/metro-runtime
npm run web
```

Máy hiện tại **chưa có adb/Android Studio**, nên đường kiểm thử chính là điện thoại thật qua Expo Go.

## Cấu trúc source

```text
hello-mobile-mvp-v1.0/
├── App.js              # Toàn bộ UI + state của MVP
├── app.json            # Tên app, slug, icon, cấu hình Expo
├── index.js            # Entry point
├── package.json
├── package-lock.json   # Khóa version để tái lập môi trường
├── assets/             # Icon, splash, favicon
├── docs/
│   └── TEST_CASES.md   # Kịch bản kiểm thử thủ công
├── .gitignore
├── AGENTS.md           # Hướng dẫn cho coding agent (template Expo)
├── LICENSE
└── README.md
```

## Kiểm thử

Kiểm tra sức khỏe project và dependency:

```powershell
npx expo-doctor
```

Kiểm tra bundle production (không cần điện thoại):

```powershell
npx expo export --platform android
```

Kịch bản kiểm thử thủ công: xem [`docs/TEST_CASES.md`](docs/TEST_CASES.md).

## Xử lý sự cố

| Hiện tượng | Cách xử lý |
|---|---|
| `Project is incompatible with this version of Expo Go` | Cập nhật Expo Go lên bản hỗ trợ SDK 58, hoặc cài đúng bản Expo Go cho SDK 58 |
| iPhone báo `You need to be signed in to Expo Go and Expo CLI...` | Chạy `npx expo login` trên máy tính và đăng nhập cùng tài khoản trong Expo Go, rồi bấm **Try Again** |
| Quét QR nhưng không tải được | Cùng Wi-Fi, tắt VPN, mở firewall cho Node.js, thử `npx expo start --tunnel` |
| `Unable to resolve module ...` | `Remove-Item -Recurse -Force node_modules` → `npm install` → `npx expo start -c` |
| Cổng 8081 bị chiếm | `npx expo start --port 8082` |
| Sửa code nhưng app không đổi | `npx expo start -c` để xóa cache Metro |
| `npm audit` báo moderate | Không chạy `npm audit fix --force`; có thể làm hỏng version Expo |

## Phiên bản & khóa phiên bản

| Package | Version |
|---|---|
| expo | `~58.1.0` |
| react | `19.3.0` |
| react-native | `0.88.1` |
| expo-status-bar | `~58.0.5` |
| react-native-safe-area-context | `~5.11.1` |

`package-lock.json` được commit để tái lập đúng dependency. Nếu giảng viên yêu cầu SDK khác:

```powershell
npx expo install expo@<version>
npx expo install --fix
```

Sau đó chạy lại `npx expo-doctor` và cập nhật bảng version trong README.

## Hướng mở rộng

- Thêm `Counter` hoặc port `hello-calculator-mvp-v1.0` sang mobile
- Gọi API từ `http-mini-lab` để gửi/nhận lời chào qua HTTP
- Lưu tên gần nhất bằng `AsyncStorage`
- Tách logic tạo lời chào thành module thuần và viết unit test

## Giấy phép

MIT — xem [`LICENSE`](LICENSE).
