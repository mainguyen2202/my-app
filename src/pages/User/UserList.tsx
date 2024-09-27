import React, { ChangeEvent, useEffect, useState } from 'react';
import Sidebar from '../../components/Layout/Sidebar';
import Header from '../../components/Layout/Header';
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

