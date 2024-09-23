import React, { useState } from 'react';
import './css/style.css';
import './css/create.css';
interface User {
  email: string;
  first_name: string;
  last_name: string;
}

const AddUser: React.FC = () => {
  const [user, setUser] = useState<User>({
    email: '',
    first_name: '',
    last_name: '',
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data);
      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
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



          <form onSubmit={handleSubmit}>
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
                onChange={handleChange}
                required />
              <div className="help-text">Required. Your name</div>
            </div>
            <div className="form-group">
              <label className="label-text">last_name</label>
              <input  type="text"
                name="last_name"
                placeholder="Tên"
                value={user.last_name}
                onChange={handleChange}
                required/>
              <div className="help-text">Required. Your name</div>
            </div>
            <div className="form-group">
              <label className="label-text">Email</label>
              <input   type="email"
                name="email"
                placeholder="Email"
                value={user.email}
                onChange={handleChange}
                required />
              <div className="help-text">Required. Your e-mail</div>
            </div>
            <button type="submit"className="submit-btn" disabled={loading}>
                {loading ? 'Đang Tạo...' : 'Tạo Người Dùng'}
              </button>
              {error && <div style={{ color: 'red' }}>Lỗi: {error}</div>}
              {success && <div style={{ color: 'green' }}>Người dùng đã được tạo thành công!</div>}
          
       
          </form>

        </div>
      </div>
    </div>
  );
};

export default AddUser;