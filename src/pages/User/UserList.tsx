import React, { ChangeEvent, useEffect, useState } from 'react';


import { Link } from 'react-router-dom';
import IUserlData from '../../types/User';
import UserDataService from "../../services/UserService";
import Sidebar from '../../components/layout/Sidebar';
import TodoList from '../../components/TodoList/TodoList';
import Header from '../../components/layout/Header';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { fetchUsers } from '../../redux/usersSlice';
import TodoTable from '../../components/table/TodoTable';

const UserList: React.FC = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="content">
        <Header />
        <div className="search-bar">
          {/* <input
            placeholder="Search for people"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          /> */}
          {/* <div className="notifications">
            <i className="fas fa-bell">
            </i>
            (2)
          </div>
          <button className="new-user">
            <a href="/add"> New User</a>
          </button> */}

        </div>


        <TodoTable />

      </div>
    </div>
  )
}

export default UserList;

