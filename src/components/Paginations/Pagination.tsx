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
        <div className="pagination">

            <div className="showing">
                Showing
                <select className="select-option">
                    <option>10</option>
                    <option>20</option>
                    <option>30</option>
                </select>
            </div>
            <div className="showing">
                Showing page {currentPage} of {totalPages}
            </div>
            <div className="pages">
                {/* btn giam */}
                <button
                    className="btn"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    <i className="fas fa-chevron-left"></i>
                </button>
                {/*  */}
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        className={currentPage === index + 1 ? 'btn active' : 'btn'}
                        onClick={() => handlePageChange(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}

                {/* btn tang */}
                <button
                    className="btn"
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