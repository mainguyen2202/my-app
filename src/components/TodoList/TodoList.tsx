import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserItem from './TodoItem/UserItem';
import { AppDispatch, RootState } from '../../redux/store';
import { fetchUsers } from '../../redux/thunks';

interface TodoListProps {
    page: number; // Nhận prop page
    searchTerm: string; // Nhận prop searchTerm
}

const TodoList: React.FC<TodoListProps> = ({ page, searchTerm  }) => {
    const dispatch = useDispatch<AppDispatch>();
    const { users, loading, error } = useSelector((state: RootState) => state.users);

    useEffect(() => {

        dispatch(fetchUsers(page)); // Gọi API để lấy người dùng từ trang hiện tại
    }, [dispatch, page]);


    const filteredUsers = users.filter(user =>
        user.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (

        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Ảnh</th>
                        <th>Email</th>
                        <th>Tên</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                        {users.length > 0 ? (
                            filteredUsers.map(user => (
                                <UserItem key={user.id} user={user} />
                            ))
                        ) : (
                            <tr>
                                <td colSpan={4} style={{ textAlign: 'center' }}>Không có người dùng nào.</td>
                            </tr>
                        )}
                    </tbody>

        
            </table>
        </div>

    );
};

export default TodoList;