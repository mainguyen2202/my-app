import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface UsersState {
  users: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async (page: number) => {
  const response = await axios.get(`https://reqres.in/api/users?page=${page}`);
  return response.data.data;
});

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
  return response.data.data;
});

// Tạo async thunk để cập nhật người dùng
export const updateUser = createAsyncThunk('users/updateUser', async (user: User) => {
  const response = await axios.put(`https://reqres.in/api/users/${user.id}`, user);
  return response.data;
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // list
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch users';
      })

      // create
      .addCase(createUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
      })

      // UserById
      .addCase(fetchUserById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch user';
      })

      // update
      .addCase(updateUser.fulfilled, (state, action) => {
        state.users = action.payload;
      });
  },
});

export default usersSlice.reducer;