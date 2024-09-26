// Định nghĩa kiểu User
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
    loading: boolean;
    error: string | null;
    totalPages: number; // Thêm trường totalPages
  }
  
  // Khởi tạo state ban đầu
  export const initialState: UsersState = {
    users: [], // Khởi tạo với mảng rỗng
    currentUser: null, // Không có người dùng hiện tại
    loading: false,
    error: null,
    totalPages: 0, // Khởi tạo với 0
  };