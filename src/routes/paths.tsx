// routes/paths.tsx
export const paths = {
    home: '/',
    users: '/users',
    addUser: '/add',
    userDetail: (id: string) => `/users/${id}`,
  };