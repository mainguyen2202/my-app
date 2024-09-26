import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddUser from './pages/User/AddUser';
import User from './pages/User/User';
import './styles/scss/style.css';
// import UsersList from './redux/UsersList';
import { Provider } from 'react-redux';
import store from './redux/store';
// import UserList from './pages/User/UserList';
import UserList from './pages/User/UserList';


function App() {
  return (

    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserList />} />
        

          {/* <Route path="/users" element={<UserList />} /> */}
          <Route path="/add" element={<AddUser />} />
          <Route path="/users/:id" element={<User />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
