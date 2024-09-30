import React from 'react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };

    return (
        <div className="user-management__pagination">
            <div className="user-management__showing">
                Showing
                <select className="user-management__select-option">
                    <option>10</option>
                    <option>20</option>
                    <option>30</option>
                </select>
            </div>
            <div className="user-management__showing">
                Showing page {currentPage} of {totalPages}
            </div>
            <div className="user-management__pages">
                <button
                    className="user-management__btn"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    <i className="fas fa-chevron-left"></i>
                </button>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        className={`user-management__btn ${currentPage === index + 1 ? 'user-management__btn--active' : ''}`}
                        onClick={() => handlePageChange(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
                <button
                    className="user-management__btn"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>
        </div>
    );
};

export default Pagination;