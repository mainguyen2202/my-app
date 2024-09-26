import React, { ChangeEvent, useState } from 'react';
// import './styles/scss/style.css';
import IUserlData from '../../types/User';
import UserDataService from "../../services/UserService";
import Sidebar from '../../components/layout/Sidebar';
import Header from '../../components/layout/Header';
import UsersForm from '../../components/AddTodo/UsersForm';

const AddUser: React.FC = () => {
  return (
    <div>
      <div className="container">
        <Sidebar />
        <div className="content">
          <Header />
          <UsersForm />

        </div>
      </div>
    </div>
  );
};

export default AddUser;