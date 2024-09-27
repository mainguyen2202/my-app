import React, { ChangeEvent, useEffect, useState } from 'react';
import Sidebar from '../../components/Layouts/Sidebar';
import Header from '../../components/Layouts/Header';
import TodoTable from '../../components/TodoTable/Table';

const UserList: React.FC = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="content">
        <Header />
        <TodoTable />

      </div>
    </div>
  )
}

export default UserList;

