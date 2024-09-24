import React, { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import IUserlData from '../../types/User';
import UserDataService from "../../services/UserService";
import Sidebar from '../../components/layout/Sidebar';


const User: React.FC = () => {
  const { id } = useParams();
  // console.log("id",id);
  let navigate = useNavigate();

  const initialUserState = {
    id: null,
    email: "",
    first_name: "",
    last_name: "",
    avatar: "",
    published: false
  };
  const [currentUser, setCurrentUser] = useState<IUserlData>(initialUserState);
  const [message, setMessage] = useState<string>("");

  // detail
  const getTutorial = (id: String) => {
    UserDataService.get(id)
      .then((response: any) => {
        setCurrentUser(response.data.data);
        console.log("detail", currentUser);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (id)
      getTutorial(id);


  }, [id]);

  // update
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCurrentUser({ ...currentUser, [name]: value });
  };

  const updateUser = () => {
    UserDataService.update(currentUser.id, currentUser)
      .then((response: any) => {
        console.log("update", response.data);
        setMessage("The user was updated successfully!");
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const updatePublished = (status: boolean) => {
    var data = {
      id: currentUser.id,
      email: currentUser.email,
      first_name: currentUser.first_name,
      last_name: currentUser.last_name,
      avatar: currentUser.avatar,
      published: status
    };

    UserDataService.update(currentUser.id, data)
      .then((response: any) => {
        console.log("updatePublished", response.data);
        setCurrentUser({ ...currentUser, published: status });
        setMessage("The status was updated successfully!");
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };



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



          {currentUser && (
            <div>


              <div >
                <div className="form-group">
                  <img src={currentUser.avatar} alt={`${currentUser.first_name} ${currentUser.last_name}`} width={100} />
                  {/* <label >Avatar</label> */}
                  <button type="button" className="upload-btn">Upload</button>
                </div>


                <div className="form-group">
                  <label className="label-text">first_name</label>
                  <input type="text"
                    name="first_name"
                    placeholder="Họ"
                    value={currentUser.first_name}
                    onChange={handleInputChange}
                    required />
                  <div className="help-text">Required. Your name</div>
                </div>


                <div className="form-group">
                  <label className="label-text">last_name</label>
                  <input type="text"
                    name="last_name"
                    placeholder="Tên"
                    value={currentUser.last_name}
                    onChange={handleInputChange}
                    required />
                  <div className="help-text">Required. Your name</div>
                </div>
                <div className="form-group">
                  <label className="label-text">Email</label>
                  <input type="email"
                    name="email"
                    placeholder="Email"
                    value={currentUser.email}
                    onChange={handleInputChange}
                    required />
                  <div className="help-text">Required. Your e-mail</div>
                </div>

                {currentUser.published ? (
            <button
              className="submit-btn submit-btn-cancel"
              onClick={() => updatePublished(false)}
            >
              UnPublish
            </button>
          ) : (
            <button
               className="submit-btn"
              onClick={() => updatePublished(true)}
            >
              Publish
            </button>
          )}

                <button type="submit"
                  onClick={updateUser}
                  className="submit-btn">Update</button>
                {/* {error && <div style={{ color: 'red' }}>Lỗi: {error}</div>}
                {success && <div style={{ color: 'green' }}>Người dùng đã được cập nhật thành công!</div>}
                <button type="button" className="submit-btn submit-btn-cancel" onClick={() => setIsEditing(false)}>Cancel</button> */}
              </div>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

export default User;