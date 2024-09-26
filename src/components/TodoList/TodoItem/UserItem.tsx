import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import User from '../../../types/User';
import { deleteUser } from '../../../redux/thunks';



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
        <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} width={50} />
      </td>
      <td>{user.email}</td>
      <td>{user.first_name} {user.last_name}</td>
      <td>

        <Link to={`/users/${user.id}`} className="badge badge-warning">
          <i className="fas fa-edit"></i>
        </Link>


        <button>
          <i className="fas fa-trash" style={{ cursor: 'pointer' }}
            onClick={() => handleDelete(user.id)}

          ></i>
        </button>


      </td>
    </tr>


  );
};

export default UserItem;