// src/components/SearchBar.tsx
import React from 'react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(event.target.value);
  };

  return (


    <div className="user-management__search-bar">
      <input
        className="user-management__search-input"
        type="text"
        placeholder="Search by name or email"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <div className="user-management__notifications">
        <i className="fas fa-bell"></i>
        (2)
      </div>
      <button className="user-management__new-user">
        <a href="/add">New User</a>
      </button>

      
    </div>
 






  );
};

export default SearchBar;