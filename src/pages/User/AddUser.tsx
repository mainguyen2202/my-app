import React, { ChangeEvent, useState } from 'react';
import Sidebar from '../../components/Layout/Sidebar';
import Header from '../../components/Layout/Header';
import UserForm from '../../components/Form/UserForm';

const AddUser: React.FC = () => {
  return (
    <div>
      <div className="container">
        <Sidebar />
        <div className="content">
          <Header />
          <UserForm />

        </div>
      </div>
    </div>
  );
};

export default AddUser;