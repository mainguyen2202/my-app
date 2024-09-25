import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../redux/usersSlice';
import UserItem from './TodoItem/UserItem';
import { AppDispatch, RootState } from '../../redux/store';


const TodoList: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>(); // Sử dụng kiểu AppDispatch
    const { users, loading, error } = useSelector((state: RootState) => state.users);

    useEffect(() => {
        dispatch(fetchUsers(2)); // Lấy danh sách users từ page 2
        console.log("đata", users);
    }, [dispatch]);

    return (
        <table>
            <thead>
                <tr>
                    <th>Ảnh</th>
                    <th>Email</th>
                    <th>Tên</th>
                    <th>
                        Hành động
                    </th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))}
            </tbody>
        </table>
    );
};

export default TodoList;