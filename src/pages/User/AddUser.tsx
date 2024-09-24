import React, { ChangeEvent, useState } from 'react';
import './css/style.css';
import IUserlData from '../../types/User';
import UserDataService from "../../services/UserService";

const AddUser: React.FC = () => {
  const initialUserState = {
    id: null,
    email: "",
    first_name: "",
    last_name: "",
    avatar: "",
    published: false
  };


  const [user, setUser] = useState<IUserlData>(initialUserState);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const saveUser = () => {
    var data = {
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
      // avatar: user.avatar,
      avatar: " user.avatar",
    };

    UserDataService.create(data)
      .then((response: any) => {
        setUser({
          id: response.data.id,
          email: response.data.email,
          first_name: response.data.first_name,
          last_name: response.data.last_name,
          avatar: response.data.avatar,
          published: response.data.published
        });
        console.log("thành công");
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const newUser = () => {
    setUser(initialUserState);
    setSubmitted(false);
  };



  return (
    <div>


      <div className="container">



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

          {submitted ? (
            <div>
              <h4>You submitted successfully!</h4>
              <button className="btn submit-btn" onClick={newUser}>
                Add
              </button>
            </div>
          ) : (

            <div >
              <div className="form-group">
                <label >Avatar</label>
                <button type="button" className="upload-btn">Upload</button>
              </div>
              <div className="form-group">
                <label className="label-text">first_name</label>
                <input type="text"
                  name="first_name"
                  placeholder="Họ"
                  value={user.first_name}
                  onChange={handleInputChange}
                  required />
                <div className="help-text">Required. Your name</div>
              </div>
              <div className="form-group">
                <label className="label-text">last_name</label>
                <input type="text"
                  name="last_name"
                  placeholder="Tên"
                  value={user.last_name}
                  onChange={handleInputChange}
                  required />
                <div className="help-text">Required. Your name</div>
              </div>
              <div className="form-group">
                <label className="label-text">Email</label>
                <input type="email"
                  name="email"
                  placeholder="Email"
                  value={user.email}
                  onChange={handleInputChange}
                  required />
                <div className="help-text">Required. Your e-mail</div>
              </div>
              <button onClick={saveUser} className="btn submit-btn">
                Submit
              </button>
              {/* <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? 'Đang Tạo...' : 'Tạo Người Dùng'}
            </button>
            {error && <div style={{ color: 'red' }}>Lỗi: {error}</div>}
            {success && <div style={{ color: 'green' }}>Người dùng đã được tạo thành công!</div>} */}


            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddUser;