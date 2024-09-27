# React + Typescript + Redux toolkit Thunk + SCSS
# Dự Án Quản Lý Người Dùng

## Giới Thiệu
Dự án này là một ứng dụng quản lý người dùng được xây dựng bằng React, TypeScript, Redux Toolkit với Thunk, và SCSS. Ứng dụng cho phép tạo người dùng mới, hiển thị danh sách người dùng, và hỗ trợ phân trang và tìm kiếm.

## Yêu Cầu Chức Năng

### 1. Tạo Người Dùng
- Tạo một form để nhập thông tin người dùng mới.
- Sử dụng yêu cầu POST đến endpoint `/api/users`.
- Hiển thị thông báo thành công khi người dùng được tạo thành công.
- Xử lý và hiển thị thông báo lỗi khi yêu cầu không thành công.

### 2. Danh Sách Người Dùng
- Fetch và hiển thị danh sách người dùng từ API.
- Sử dụng yêu cầu GET đến endpoint `/api/users`.
- Hiển thị avatar, tên, họ và email của người dùng.

### 3. Phân Trang
- Implement phân trang cho danh sách người dùng.
- Sử dụng tham số truy vấn `?page=2` để phân trang.
- Hiển thị số trang hiện tại và tổng số trang.
- Thêm nút điều hướng để chuyển đến trang tiếp theo và trang trước.

### 4. Lọc
- Thêm input tìm kiếm để lọc người dùng theo tên hoặc email.
- Thực hiện lọc phía client (vì API ReqRes không hỗ trợ lọc phía server).
- Cập nhật danh sách người dùng hiển thị theo thời gian thực khi người dùng gõ vào ô tìm kiếm.

### 5. Tính Năng Bổ Sung (Tùy Chọn)
- Implement xem chi tiết người dùng.
- Thêm chức năng cập nhật người dùng.
- Implement xóa người dùng.

## Cấu Trúc Dự Án

- **components**: Chứa các component chung sử dụng trong ứng dụng.
- **pages**: Chứa các trang khác nhau của ứng dụng.
- **redux**: Chứa các slice và cấu hình store cho Redux.
- **routes**: Cấu hình các route và điều hướng của ứng dụng.
- **services**: Các dịch vụ để tương tác với API.
- **styles**: Chứa các tệp SCSS cho phong cách của ứng dụng.
- **types**: Chứa các kiểu TypeScript để quản lý kiểu dữ liệu.

## Hướng Dẫn Cài Đặt và Chạy Ứng Dụng

1. **Clone Repository**
   git clone https://github.com/mainguyen2202/my-app.git

2. **Cài Đặt Dependencies**
    npm install

3. **Chạy ứng dụng**
    npm start

## Công Nghệ Sử Dụng
- React: Thư viện JavaScript cho giao diện người dùng.
- TypeScript: Ngôn ngữ lập trình để tăng cường khả năng bảo trì.
- Redux Toolkit: Thư viện quản lý trạng thái.
- Thunk: Middleware cho Redux để xử lý các tác vụ bất đồng bộ.
- SCSS: Tiền xử lý CSS để quản lý phong cách dễ dàng hơn.

# scss
sass ./scss/styleSCSS.scss ./scss/styleCSS.css

<!-- sass src/pages/User/scss/style.scss src/pages/User/scss/style.css -->

sass src/styles/scss/style.scss src/styles/scss/style.css

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
