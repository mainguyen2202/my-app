import React from 'react';

interface User {
  id?: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar?: string;
}

interface UserItemProps {
  user: User;
}

const UserItem: React.FC<UserItemProps> = ({ user }) => {
  return (
    <li>
      <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
      <p>{user.first_name} {user.last_name}</p>
      <p>{user.email}</p>
    </li>
  );
};

export default UserItem;