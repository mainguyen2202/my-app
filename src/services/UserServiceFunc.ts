// src/services/UserService.ts
import http from "../http-common"; // Import Axios configuration
import { ApiResponse, User } from "../types/type"; // Import ApiResponse and User types

// Function to get the list of users by page
export const getUsers = (page: number): Promise<ApiResponse<User[]>> => {
    return http.get(`/users?page=${page}`);
};

// Function to get a user by ID
export const getUserById = (id: number): Promise<ApiResponse<User>> => {
    return http.get(`/users/${id}`);
};

// Function to create a user
export const createUser = (user: User): Promise<ApiResponse<User>> => {
    return http.post('/users', user);
};

// Function to update a user
export const updateUser = (user: User): Promise<ApiResponse<User>> => {
    return http.put(`/users/${user.id}`, user);
};

// Function to delete a user
export const deleteUser = (id: number): Promise<void> => {
    return http.delete(`/users/${id}`);
};