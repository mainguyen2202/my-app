import React from 'react';

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface UserItemProps {
  user: User;
}

const UserItem: React.FC<UserItemProps> = ({ user }) => {
  return (

    <tr key={user.id}>
      <td>
        <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} width={50} />
      </td>
      <td>{user.email}</td>
      <td>{user.first_name} {user.last_name}</td>
      <td>

      {/* <Link to={`/users/${user.id}`} className="badge badge-warning">
                      <i className="fas fa-edit"></i>
                    </Link>


                    <button>
                      <i className="fas fa-trash" style={{ cursor: 'pointer' }}
                        onClick={() => deleteTutorial(user.id)}

                      ></i>
                    </button> */}
      </td>
    </tr>


  );
};

export default UserItem;