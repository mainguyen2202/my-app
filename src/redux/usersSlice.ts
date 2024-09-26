import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../types/type';
import {
  fetchUsers,
  createUser,
  fetchUserById,
  updateUser,
  deleteUser,
} from './thunks';


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
      // Fetch Users
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true; // Khi bắt đầu fetch, set loading thành true
        state.error = null;  // Reset lỗi
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;  // Khi fetch thành công, set loading thành false
        state.users = action.payload.data; // Lưu danh sách người dùng
        state.totalPages = action.payload.total_pages; // Cập nhật totalPages
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false; // Khi fetch thất bại, set loading thành false
        state.error = action.error.message || 'Failed to fetch users'; // Cập nhật lỗi
      })
      // Create User
      .addCase(createUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
      })
      // Fetch User By ID
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUser = action.payload;
      })
      // Update User
      .addCase(updateUser.fulfilled, (state, action) => {
        const index = state.users.findIndex(user => user.id === action.payload.id);
        if (index !== -1) {
          state.users[index] = action.payload; // Cập nhật người dùng
        }
      })
      // Delete User
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter(user => user.id !== action.payload);
      });
  },
});

export const { setCurrentUser, clearCurrentUser } = usersSlice.actions;
export default usersSlice.reducer;