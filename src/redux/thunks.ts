// src/redux/users/thunks.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import UserService from '../services/UserServiceClass'; // Import UserService
import { User } from '../types/type';

// Tạo async thunk để lấy danh sách người dùng theo trang
export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async (page: number) => {
        const response = await UserService.getUsers(page);
        return response.data; // Trả về toàn bộ dữ liệu từ API
    }
);

//  Tạo async thunk để tạo người dùng Create User
export const createUser = createAsyncThunk('users/createUser', async (user: User) => {
    const response = await UserService.createUser(user);
    return response.data;
});

// Tạo async thunk để lấy người dùng theo ID Fetch User By ID
export const fetchUserById = createAsyncThunk('users/fetchUserById', async (id: number) => {
    const response = await UserService.getUserById(id);
    return response.data.data;
});

// Tạo async thunk để cập nhật người dùng Update User
export const updateUser = createAsyncThunk('users/updateUser', async (user: User) => {
    const response = await UserService.updateUser(user);
    return response.data;
});

// Tạo async thunk để xóa người dùng Delete User
export const deleteUser = createAsyncThunk('users/deleteUser', async (id: number) => {
    await UserService.deleteUser(id);
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