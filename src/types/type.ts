// src/types/type.ts
export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

  // Định nghĩa kiểu cho state
export interface UsersState {
  users: User[]; // Danh sách người dùng
  currentUser: User | null; // Người dùng hiện tại
  loading: boolean; // Trạng thái loading
  error: string | null; // Thông báo lỗi
  totalPages: number; // Tổng số trang
}

export const initialState: UsersState = {
  users: [], // Khởi tạo với mảng rỗng
  currentUser: null, // Không có người dùng hiện tại
  loading: false, // Không ở trạng thái loading
  error: null, // Không có lỗi
  totalPages: 0, // Khởi tạo với 0 trang
};

export interface ApiResponse<T> {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: T;
}