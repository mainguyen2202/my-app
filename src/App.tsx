import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import UserList from './pages/User/UserList';
import AddUser from './pages/User/AddUser';
import User from './pages/User/User';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/users/:id" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
