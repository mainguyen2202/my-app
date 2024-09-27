import { createSlice, PayloadAction, AnyAction } from '@reduxjs/toolkit';
import { initialState } from '../types/type';
import {
  fetchUsers,
  createUser,
  fetchUserById,
  updateUser,
  deleteUser,
} from './thunks';
import { User } from '../types/type'; // Ensure that User type is imported

// Define the state type
type UsersState = typeof initialState;

const handleFetchUsersPending = (state: UsersState) => {
  state.loading = true;
  state.error = null;
};

const handleFetchUsersFulfilled = (
  state: UsersState,
  action: PayloadAction<{
    data: User[],
    total_pages: number
  }>) => {
  state.loading = false;
  state.users = action.payload.data; // Store the list of users
  state.totalPages = action.payload.total_pages; // Update totalPages
};

const handleFetchUsersRejected = (state: UsersState, action: AnyAction) => {
  state.loading = false;
  // Access the error message from `action.error`
  state.error = action.error?.message || 'Failed to fetch users';
};



const handleCreateUserFulfilled = (state: UsersState, action: PayloadAction<User>) => {
  state.users.push(action.payload);
};

// ByIdUser
const handleFetchUserByIdFulfilled = (state: UsersState, action: PayloadAction<{ data: User }>) => {
  state.loading = false;
  state.currentUser = action.payload.data; // Update current user
};

// const handleFetchUserByIdFulfilled = (state: UsersState, action: PayloadAction<User>) => {
//   state.loading = false;
//   state.currentUser = action.payload; // Update current user
// };


const handleUpdateUserFulfilled = (state: UsersState, action: PayloadAction<User>) => {
  const index = state.users.findIndex(user => user.id === action.payload.id);
  if (index !== -1) {
    state.users[index] = action.payload;
  }
};

const handleDeleteUserFulfilled = (state: UsersState, action: PayloadAction<number>) => {
  state.users = state.users.filter(user => user.id !== action.payload);
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setCurrentUser(state: UsersState, action: PayloadAction<User | null>) {
      state.currentUser = action.payload;
    },
    clearCurrentUser(state: UsersState) {
      state.currentUser = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, handleFetchUsersPending)
      .addCase(fetchUsers.fulfilled, handleFetchUsersFulfilled)
      .addCase(fetchUsers.rejected, handleFetchUsersRejected)
      
      .addCase(createUser.fulfilled, handleCreateUserFulfilled)
      .addCase(fetchUserById.fulfilled, handleFetchUserByIdFulfilled)
      .addCase(updateUser.fulfilled, handleUpdateUserFulfilled)
      .addCase(deleteUser.fulfilled, handleDeleteUserFulfilled);
  },
});

export const { setCurrentUser, clearCurrentUser } = usersSlice.actions;
export default usersSlice.reducer;