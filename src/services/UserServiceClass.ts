// src/services/UserService.ts
import http from "../http-common";
import User from "../types/User";// Import kiểu User

// Phương thức lớp
class UserService {
    // Lấy danh sách người dùng theo trang
    getUsers(page: number) {
        return http.get(`/users?page=${page}`);
    }

    // Tạo người dùng
    createUser(user: User) {
        return http.post('/users', user);
    }

    // Lấy người dùng theo ID
    getUserById(id: number) {
        return http.get(`/users/${id}`);
    }

    // Cập nhật người dùng
    updateUser(user: User) {
        return http.put(`/users/${user.id}`, user);
    }

    // Xóa người dùng
    deleteUser(id: number) {
        return http.delete(`/users/${id}`);
    }
}

export default new UserService();