// src/services/UserService.ts
import http from "../http-common"; // Import cấu hình Axios
import { ApiResponse, User } from "../types/type"; // Import kiểu ApiResponse và User

class UserService {

    // Lấy danh sách người dùng theo trang
    getUsers(page: number) {
        return http.get(`/users?page=${page}`);
    }


    // Lấy người dùng theo ID
    getUserById(id: number) {
        return http.get(`/users/${id}`);
    }


    // Dùng Promise<ApiResponse<User>

    // Tạo người dùng
    createUser(user: User): Promise<ApiResponse<User>> {
        return http.post('/users', user);
    }



    // Cập nhật người dùng
    updateUser(user: User): Promise<ApiResponse<User>> {
        return http.put(`/users/${user.id}`, user);
    }

    // Xóa người dùng
    deleteUser(id: number): Promise<void> {
        return http.delete(`/users/${id}`);
    }

    // Lấy danh sách người dùng theo trang
    // getUsers(page: number): Promise<ApiResponse<User[]>> {
    //     return http.get(`/users?page=${page}`);
    // }


    // Lấy người dùng theo ID
    // getUserById(id: number): Promise<ApiResponse<User>> {
    //     return http.get(`/users/${id}`);
    // }


}

export default new UserService();