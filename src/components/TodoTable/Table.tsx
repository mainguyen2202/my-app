import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import TodoList from '../TodoList/TodoList';
import Pagination from '../Paginations/Pagination';
import SearchBar from '../FilterTodo/SearchBar';
import { fetchUsers } from '../../redux/thunks';

const Table: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { totalPages, loading, error } = useSelector((state: RootState) => state.users);

    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState(''); // Trạng thái tìm kiếm

    useEffect(() => {
        dispatch(fetchUsers(currentPage)); // Gọi API để lấy người dùng từ trang hiện tại
    }, [dispatch, currentPage]);

    const handleSearchChange = (term: string) => {
        setSearchTerm(term); // Cập nhật từ tìm kiếm
    };
 

    return (
        <div className="user-management">
             <SearchBar 
                searchTerm={searchTerm} 
                onSearchChange={handleSearchChange} 
            /> {/* Truyền props vào SearchBar */}
            <TodoList 
                page={currentPage}  /* Truyền currentPage vào TodoList */
                searchTerm={searchTerm} // Truyền searchTerm vào TodoList
            /> 
            <Pagination 
                currentPage={currentPage} 
                totalPages={totalPages} 
                onPageChange={setCurrentPage} // Truyền hàm thay đổi trang
            />
        </div>
    );
};

export default Table;