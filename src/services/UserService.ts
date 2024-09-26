import http from "../http-common";

import User from "../types/User";
// hàm riêng
// Hàm mới để lấy danh sách người dùng theo trang
const getAllByPage = (page: number) => {
  return http.get<Array<User>>(`/users?page=${page}`);
};


// detail
const get = (id: any) => {
  return http.get<User>(`/users/${id}`);
};

const create = (data: User) => {
  return http.post<User>("/users", data);
};

const update = (id: any, data: User) => {
  return http.put<any>(`/users/${id}`, data);
};

const remove = (id: any) => {
  return http.delete<any>(`/users/${id}`);
};


const getAll = () => {
  return http.get<Array<User>>("/users");
};


const removeAll = () => {
  return http.delete<any>(`/users`);
};

const findByTitle = (title: string) => {
  return http.get<Array<User>>(`/users?title=${title}`);
};



const userservice = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
  getAllByPage, // Thêm hàm mới vào đối tượng
};

export default userservice;