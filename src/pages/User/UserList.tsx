import React, { ChangeEvent, useEffect, useState } from 'react';


import { Link } from 'react-router-dom';
import IUserlData from '../../types/User';
import UserDataService from "../../services/UserService";
import Sidebar from '../../components/layout/Sidebar';
import TodoList from '../../components/TodoList/TodoList';
import Header from '../../components/layout/Header';

const UserList: React.FC = () => {
  const [users, setUsers] = useState<Array<IUserlData>>([]);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  const [searchTerm, setSearchTerm] = useState<string>('');

  const [success, setSuccess] = useState<boolean>(false);



  useEffect(() => {
    retrieveUsers(currentPage);

  }, [currentPage]);

  //  list: page
  const retrieveUsers = (page: number) => {
    UserDataService.getAllByPage(page)
      .then((response: any) => {

        setUsers(response.data.data);
        console.log(response.data.data);

        // total page
        setTotalPages(response.data.total_pages);

      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  // search
  const filteredUsers = users.filter(user =>
    user.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // delete
  const deleteTutorial = (idInput: number) => {
    UserDataService.remove(idInput)
      .then((response: any) => {
        console.log(response.data);
        // Cập nhật danh sách người dùng sau khi xóa
        setUsers(prevUsers => prevUsers.filter(user => user.id !== idInput));
        // prevUsers là danh sách người dùng hiện tại, và phương thức filter sẽ tạo ra một mảng mới chứa tất cả người dùng ngoại trừ người dùng có id bằng idInput.
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };


  return (
    <div className="container">

      <Sidebar />

      <div className="content">
        <Header />
        <div className="search-bar">
          <input
            placeholder="Search for people"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="notifications">
            <i className="fas fa-bell">
            </i>
            (2)
          </div>
          <button className="new-user">
            <a href="/add"> New User</a>
          </button>

        </div>
        <div className="table-container">
          <TodoList />

        </div>


        <div className="pagination">
          <div className="showing">
            Showing
            <select className="select-option">
              <option>10</option>
              <option>20</option>
              <option>30</option>
            </select>
          </div>
          <div className="pages">
            <button className="btn" onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}>
              <i className="fas fa-chevron-left"></i>
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                className={currentPage === index + 1 ? 'btn active' : 'btn'}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
            <button className="btn" onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>

        </div>

      </div>
    </div>
  )
}

export default UserList;

