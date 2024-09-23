import React, { useEffect, useState } from 'react';
import './css/style.css';
import { Link } from 'react-router-dom';

// import { useHistory } from 'react-router-dom';

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface ApiResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [success, setSuccess] = useState<boolean>(false);
  // const history = useHistory(); // Hook để điều hướng

  const fetchUsers = async (page: number) => {
    try {
      const response = await fetch(`https://reqres.in/api/users?page=${page}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data: ApiResponse = await response.json();
      setUsers(data.data);
      setTotalPages(data.total_pages);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers(currentPage);
  }, [currentPage]);

  const filteredUsers = users.filter(user =>
    user.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );



  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, { input }) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://reqres.in/api/users/${input}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        }

      });

      if (!response.ok) {
        throw new Error('Failed to update user');
      }
      setSuccess(true);
      // Quay lại trang danh sách người dùng hoặc thực hiện hành động khác sau khi cập nhật thành công
      // history.push('/');
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Unknown error');
    }
  };




  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container">


      <div className="sidebar">
        <h2>
          Management
        </h2>
        <ul>
          <li>
            <i className="fas fa-users">
            </i>
            People Management
          </li>
          <li>
            <i className="fas fa-cogs">
            </i>
            System
          </li>
          <li>
            <i className="fas fa-sliders-h">
            </i>
            Configuration
          </li>
          <li>
            <i className="fas fa-folder-open">
            </i>
            Commands
          </li>
          <li>
            <i className="fas fa-chart-bar">
            </i>
            Analysis
          </li>
          <li>
            <i className="fas fa-cogs">
            </i>
            Configuration
          </li>
          <li>
            <i className="fas fa-cog">
            </i>
            Settings
          </li>
          <li>
            <i className="fas fa-folder-open">
            </i>
            Commands
          </li>
          <li>
            <i className="fas fa-sliders-h">
            </i>
            Configuration
          </li>
          <li>
            <i className="fas fa-cogs">
            </i>
            System
          </li>
        </ul>
      </div>
      <div className="content">
        <div className="header">
          <h1>
            People Management
          </h1>
          <div className="user-info">
            <img alt="User profile picture" height="40" src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-LmQ09WWGIGwOeeA4ArnRw0x5/user-uJPET5fjNenSso8wCETWVNOp/img-qSb73wiFCx2dobv6sU1kJRKi.png?st=2024-09-23T00%3A09%3A44Z&amp;se=2024-09-23T02%3A09%3A44Z&amp;sp=r&amp;sv=2024-08-04&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-09-22T23%3A18%3A02Z&amp;ske=2024-09-23T23%3A18%3A02Z&amp;sks=b&amp;skv=2024-08-04&amp;sig=8Ep9amepEv/6sdnXxyq4cCxTdMh5OK2NHOPObrFYooM%3D" width="40" />
            <div className="name">
              John Doe
            </div>
            <div className="role">
              Admin
            </div>
          </div>
        </div>
        <div className="search-bar">
          <input
            placeholder="Search for people"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="notifications">
            <i className="fas fa-bell">
            </i>
            (2)
          </div>
          <button className="new-user">
            <a href="/add"> New User</a>
          </button>

        </div>
        <div className="table-container">

          <table>
            <thead>
              <tr>
                <th>Ảnh</th>
                <th>Email</th>
                <th>Tên</th>
                <th>
                  Hành động
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map(user => (
                <tr key={user.id}>
                  <td>
                    <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} width={50} />
                  </td>
                  <td>{user.email}</td>
                  <td>{user.first_name} {user.last_name}</td>
                  <td>
                    {/* <i className="fas fa-edit" onClick={() => history.push(`/users/${user.id}`)} style={{ cursor: 'pointer', marginRight: '10px' }}></i> */}


                    <Link to={`/users/${user.id}`} className="badge badge-warning">
                      <i className="fas fa-edit"></i>
                    </Link>


                    <button>
                      <i className="fas fa-trash" style={{ cursor: 'pointer' }}
                        onClick={() => handleSubmit(e, user.id)}

                      ></i>
                    </button>

            

                  </td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>


        <div className="pagination">
          <div className="showing">
            Showing
            <select className="select-option">
              <option>10</option>
              <option>20</option>
              <option>30</option>
            </select>
          </div>
          <div className="pages">
            <button className="btn" onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}>
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
            <button className="btn" onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>

        </div>

      </div>
    </div>
  )
}

export default UserList;

