import React, { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import IUserlData from '../../types/User';
import UserDataService from "../../services/UserService";
import Sidebar from '../../components/layout/Sidebar';
import UsersForm from '../../components/EditTodo/UserFormEdit';


const User: React.FC = () => {
  const { id } = useParams();

  console.log("id",id);


  // const userIdInput = 2;


  return (
    <div>
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
                Admin :
              </div>
            </div>
          </div>



          {/* {currentUser && ( */}
            <UsersForm userId={2} />
          {/* )} */}
        </div>
      </div>

    </div>
  );
};

export default User;