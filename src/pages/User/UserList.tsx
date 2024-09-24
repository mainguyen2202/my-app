import React, { ChangeEvent, useEffect, useState } from 'react';


import { Link } from 'react-router-dom';
import IUserlData from '../../types/User';
import UserDataService from "../../services/UserService";
import Sidebar from '../../components/layout/Sidebar';

const UserList: React.FC = () => {
  const [users, setUsers] = useState<Array<IUserlData>>([]);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  const [searchTerm, setSearchTerm] = useState<string>('');

  const [success, setSuccess] = useState<boolean>(false);



  useEffect(() => {
    retrieveUsers(currentPage);

  }, [currentPage]);

  //  list: page
  const retrieveUsers = (page: number) => {
    UserDataService.getAllByPage(page)
      .then((response: any) => {

        setUsers(response.data.data);
        console.log(response.data.data);

        // total page
        setTotalPages(response.data.total_pages);

      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  // search
  const filteredUsers = users.filter(user =>
    user.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // delete
  const deleteTutorial = (idInput: number) => {
    UserDataService.remove(idInput)
      .then((response: any) => {
        console.log(response.data);
        // Cập nhật danh sách người dùng sau khi xóa
        setUsers(prevUsers => prevUsers.filter(user => user.id !== idInput));
        // prevUsers là danh sách người dùng hiện tại, và phương thức filter sẽ tạo ra một mảng mới chứa tất cả người dùng ngoại trừ người dùng có id bằng idInput.
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };


  return (
    <div className="container">

      <Sidebar />

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
                        onClick={() => deleteTutorial(user.id)}

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

