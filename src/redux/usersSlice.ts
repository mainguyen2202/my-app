import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


// Định nghĩa kiểu User
interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

// Định nghĩa kiểu cho state
interface UsersState {
  users: User[]; // Danh sách người dùng
  currentUser: User | null; // Người dùng hiện tại
  loading: boolean;
  error: string | null;

  totalPages: number; // Thêm trường totalPages
}

// Khởi tạo state ban đầu
const initialState: UsersState = {
  users: [], // Khởi tạo với mảng rỗng
  currentUser: null, // Không có người dùng hiện tại
  loading: false,
  error: null,
  totalPages: 0, // Khởi tạo với 0
};

// Tạo async thunk để lấy danh sách người dùng theo trang
// export const fetchUsers = createAsyncThunk('users/fetchUsers', async (page: number) => {
//   const response = await axios.get(`https://reqres.in/api/users?page=${page}`);
//   return response.data.data;
// });


export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (page: number) => {
    const response = await axios.get(`https://reqres.in/api/users?page=${page}`);
    return response.data; // Trả về toàn bộ dữ liệu từ API
  }
);


// ----------

// Tạo async thunk để lấy danh sách người dùng
// export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
//   const response = await axios.get('https://reqres.in/api/users');
//   return response.data.data;
// });

// Tạo async thunk để tạo người dùng
export const createUser = createAsyncThunk('users/createUser', async (user: User) => {
  const response = await axios.post('https://reqres.in/api/users', user);
  return response.data;
});

// Tạo async thunk để lấy người dùng theo ID
export const fetchUserById = createAsyncThunk('users/fetchUserById', async (id: number) => {
  const response = await axios.get(`https://reqres.in/api/users/${id}`);
  console.log("detail thanh cong response.data.data", response.data.data);

  return response.data.data;
});


// Tạo async thunk để cập nhật người dùng
export const updateUser = createAsyncThunk('users/updateUser', async (user: User) => {
  const response = await axios.put(`https://reqres.in/api/users/${user.id}`, user);
  return response.data;
});

// Tạo async thunk để xóa người dùng
export const deleteUser = createAsyncThunk('users/deleteUser', async (id: number) => {
  await axios.delete(`https://reqres.in/api/users/${id}`);
  return id; // Trả về ID để xóa
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
    clearCurrentUser(state) {
      state.currentUser = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // list
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true; // Khi bắt đầu fetch, set loading thành true
        state.error = null; // Reset lỗi
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false; // Khi fetch thành công, set loading thành false
        state.users = action.payload.data; // Lưu danh sách người dùng
        state.totalPages = action.payload.total_pages; // Cập nhật totalPages
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false; // Khi fetch thất bại, set loading thành false
        state.error = action.error.message || 'Failed to fetch users'; // Cập nhật lỗi
      })

      // create
      .addCase(createUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
      })

      // UserById
      // .addCase(fetchUserById.pending, (state) => {
      //   state.loading = true;
      // })
      // .addCase(fetchUserById.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.users = action.payload;
      // })
      // .addCase(fetchUserById.rejected, (state, action) => {
      //   state.loading = false;
      //   state.error = action.error.message || 'Failed to fetch user';
      // })

      // Xử lý các action khác như fetchUsers, fetchUserById...
      // .addCase(fetchUsers.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.users = action.payload; // Cập nhật danh sách người dùng
      // })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUser = action.payload; // Cập nhật người dùng hiện tại
      })

      // update
      .addCase(updateUser.fulfilled, (state, action) => {
        state.users = action.payload;
      })

      // delete

      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter(user => user.id !== action.payload);
      });
  },
});
export const { setCurrentUser, clearCurrentUser } = usersSlice.actions;
export default usersSlice.reducer;