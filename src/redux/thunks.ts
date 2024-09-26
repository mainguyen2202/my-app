// src/redux/users/thunks.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import UserService from '../services/UserServiceClass'; // Import UserService
import { User, ApiResponse } from '../types/type'; // Import the new ApiResponse type
import axios from 'axios';

// Tạo async thunk để lấy danh sách người dùng theo trang
export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async (page: number) => {
        const response = await UserService.getUsers(page);
        return response.data; // Trả về toàn bộ dữ liệu từ API
    }
);

// Tạo async thunk để lấy người dùng theo ID Fetch User By ID
export const fetchUserById = createAsyncThunk('users/fetchUserById', async (id: number) => {
    const response = await UserService.getUserById(id);
    return response.data;
});


// Dùng Promise<ApiResponse<User>

// Generic function to handle API requests
const apiRequestUser = async <T>(requestFunc: Promise<ApiResponse<T>>): Promise<T> => {
    try {
        const response = await requestFunc;
        console.log("response abc", response.data);
        return response.data; // Return the data from the response
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            throw new Error(error.response.data?.message || 'Something went wrong');
        } else {
            throw new Error('Something went wrong');
        }
    }
};
// Tạo async thunk để tạo người dùng
export const createUser = createAsyncThunk(
    'users/createUser',
    async (user: User) => {
        return await apiRequestUser(UserService.createUser(user));
    }
);



// Tạo async thunk để cập nhật người dùng
export const updateUser = createAsyncThunk(
    'users/updateUser',
    async (user: User) => {
        return await apiRequestUser(UserService.updateUser(user));
    }
);

// Tạo async thunk để xóa người dùng
export const deleteUser = createAsyncThunk(
    'users/deleteUser',
    async (id: number) => {
        await UserService.deleteUser(id);
        return id; // Trả về ID để xóa
    }
);

// // Generic function to handle API requests
// const apiRequest = async <T>(requestFunc: Promise<ApiResponse<T>>): Promise<ApiResponse<T>> => {
//     try {
//         const response = await requestFunc;
//         return response;
//     } catch (error) {
//         if (axios.isAxiosError(error) && error.response) {
//             throw new Error(error.response.data?.message || 'Something went wrong');
//         } else {
//             throw new Error('Something went wrong');
//         }
//     }
// };

// // Tạo async thunk để lấy danh sách người dùng theo trang
// export const fetchUsers = createAsyncThunk(
//     'users/fetchUsers',
//     async (page: number) => {
//         const response = await apiRequest(UserService.getUsers(page));

//         // Correctly access `data` and `total_pages` from the response
//         console.log("aahs",response.data)
//         return { users: response.data.data, total_pages: response.total_pages }; 
//     }
// );

// Tạo async thunk để lấy người dùng theo ID
// export const fetchUserById = createAsyncThunk(
//     'users/fetchUserById',
//     async (id: number) => {
//         return await apiRequestUser(UserService.getUserById(id));
//     }
// );

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