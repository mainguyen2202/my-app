import http from "../http-common";

import IUserlData from "../types/User";

const getAll = () => {
  return http.get<Array<IUserlData>>("/users");
};

// detail
const get = (id: any) => {
  return http.get<IUserlData>(`/users/${id}`);
};

const create = (data: IUserlData) => {
  return http.post<IUserlData>("/users", data);
};

const update = (id: any, data: IUserlData) => {
  return http.put<any>(`/users/${id}`, data);
};

const remove = (id: any) => {
  return http.delete<any>(`/users/${id}`);
};

const removeAll = () => {
  return http.delete<any>(`/users`);
};

const findByTitle = (title: string) => {
  return http.get<Array<IUserlData>>(`/users?title=${title}`);
};

// Hàm mới để lấy danh sách người dùng theo trang
const getAllByPage = (page: number) => {
  return http.get<Array<IUserlData>>(`/users?page=${page}`);
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