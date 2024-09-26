import React from 'react';
import {  useParams } from 'react-router-dom';
import Sidebar from '../../components/Layout/Sidebar';
import Header from '../../components/Layout/Header';
import UserForm from '../../components/Form/UserForm';


const User: React.FC = () => {
  // const { id } = useParams<{ id?: string }>(); // Đánh dấu id là optional
  // const userId = parseInt(id ?? '', 10); // Sử dụng chuỗi rỗng nếu id là undefined

  // console.log('id',id)
  // if (isNaN(userId)) {
  //     console.error("ID không hợp lệ");
  // }


  const { id } = useParams<{ id?: string }>(); // Đánh dấu id là optional
  const userId = Number(id);

  if (isNaN(userId)) {
      console.error("ID không hợp lệ");
  }

  return (
    <div>
      <div className="container">

      <Sidebar />

        <div className="content">
        <Header />
          {/* {currentUser && ( */}
          <UserForm userId={userId} />
          {/* )} */}
        </div>
      </div>

    </div>
  );
};

export default User;