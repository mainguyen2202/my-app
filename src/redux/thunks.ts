// thunks.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from '../types/type';

// Tạo async thunk để lấy danh sách người dùng theo trang
export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (page: number) => {
    const response = await axios.get(`https://reqres.in/api/users?page=${page}`);
    return response.data; // Trả về toàn bộ dữ liệu từ API
  }
);

// Tạo async thunk để tạo người dùng
export const createUser = createAsyncThunk('users/createUser', async (user: User) => {
  const response = await axios.post('https://reqres.in/api/users', user);
  return response.data;
});

// Tạo async thunk để lấy người dùng theo ID
export const fetchUserById = createAsyncThunk('users/fetchUserById', async (id: number) => {
  const response = await axios.get(`https://reqres.in/api/users/${id}`);
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


// ------
// Tạo async thunk để lấy danh sách người dùng theo trang
// export const fetchUsers = createAsyncThunk('users/fetchUsers', async (page: number) => {
//   const response = await axios.get(`https://reqres.in/api/users?page=${page}`);
//   return response.data.data;
// });

// addcase    state.users = action.payload; 


// Tạo async thunk để lấy danh sách người dùng
// export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
//   const response = await axios.get('https://reqres.in/api/users');
//   return response.data.data;
// });