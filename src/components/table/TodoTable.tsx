import React, { useEffect, useState } from 'react'
import { fetchUsers } from '../../redux/usersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import TodoList from '../TodoList/TodoList';


const TodoTable: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { totalPages, loading, error } = useSelector((state: RootState) => state.users);

    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        dispatch(fetchUsers(currentPage)); // Gọi API để lấy người dùng từ trang hiện tại
    }, [dispatch, currentPage]);


    return (
        <div>
            <TodoList page={currentPage} /> {/* Truyền currentPage vào UserList */}
            <div className="pagination">
                <div className="showing">
                    Showing page {currentPage} of {totalPages}
                </div>
                <div className="pages">
                    <button
                        className="btn"
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                    >
                        <i className="fas fa-chevron-left"></i>
                    </button>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            className={currentPage === index + 1 ? 'btn active' : 'btn'}
                            onClick={() => setCurrentPage(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button
                        className="btn"
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                    >
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TodoTable;
