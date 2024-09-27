// routes/AppRoutes.tsx
import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { paths } from './paths'; // Import paths


const AddUser = lazy(() => import('../pages/User/AddUser'));
const User = lazy(() => import('../pages/User/User'));
const UserList = lazy(() => import('../pages/User/UserList'));

const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path={paths.home} element={<UserList />} />
        <Route path={paths.users} element={<UserList />} />
        <Route path={paths.addUser} element={<AddUser />} />
        <Route path={paths.userDetail(':id')} element={<User />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;