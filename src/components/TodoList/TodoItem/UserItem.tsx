import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux/store';

import { deleteUser } from '../../../redux/thunks';
import { User } from '../../../types/type';



interface UserItemProps {
  user: User;
}

const UserItem: React.FC<UserItemProps> = ({ user }) => {
  const dispatch = useDispatch<AppDispatch>(); // Sử dụng kiểu AppDispatch


  const handleDelete = (id: number) => {
    dispatch(deleteUser(id));
  };


  return (

    <tr key={user.id}>
      <td>
        <img
          src={user.avatar}
          alt={`${user.first_name} ${user.last_name}`}
          width={50}
          className="user-management__avatar"
        />
      </td>
      <td className="user-management__email">{user.email}</td>
      <td className="user-management__name">{user.first_name} {user.last_name}</td>
      <td className="user-management__actions">
        <Link to={`/users/${user.id}`} className="user-management__edit-btn">
          <i className="fas fa-edit"></i>
        </Link>
        <button className="user-management__delete-btn" onClick={() => handleDelete(user.id)}>
          <i className="fas fa-trash" style={{ cursor: 'pointer' }}></i>
        </button>
      </td>
    </tr>


  );
};

export default UserItem;