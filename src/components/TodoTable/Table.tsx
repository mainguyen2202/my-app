import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../../redux/usersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import TodoList from '../TodoList/TodoList';
import Pagination from '../Pagination/Pagination';
import SearchBar from '../FilterTodo/SearchBar';

const Table: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { totalPages, loading, error } = useSelector((state: RootState) => state.users);
    console.log("totalPages",totalPages);

    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState(''); // Trạng thái tìm kiếm

    useEffect(() => {
        dispatch(fetchUsers(currentPage)); // Gọi API để lấy người dùng từ trang hiện tại
    }, [dispatch, currentPage]);

    const handleSearchChange = (term: string) => {
        setSearchTerm(term); // Cập nhật từ tìm kiếm
    };
 

    return (
        <div>
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