import React, { ChangeEvent, useState } from 'react';
import Sidebar from '../../components/Layouts/Sidebar';
import Header from '../../components/Layouts/Header';
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