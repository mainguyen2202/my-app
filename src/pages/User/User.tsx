import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface ApiResponse {
  data: User;
}

const User: React.FC = () => {

  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const fetchUser = async () => {
    try {
      const response = await fetch(`https://reqres.in/api/users/${id}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data: ApiResponse = await response.json();
      setUser(data.data);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {


    fetchUser();
  }, [id]);



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (user) {
      setUser({
        ...user,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (user) {
      try {
        const response = await fetch(`https://reqres.in/api/users/${user.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
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
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;


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
                Admin :
              </div>
            </div>
          </div>



          {user && (
            <div>


              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} width={100} />
                  {/* <label >Avatar</label> */}
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
                  <input type="text"
                    name="last_name"
                    placeholder="Tên"
                    value={user.last_name}
                    onChange={handleChange}
                    required />
                  <div className="help-text">Required. Your name</div>
                </div>
                <div className="form-group">
                  <label className="label-text">Email</label>
                  <input type="email"
                    name="email"
                    placeholder="Email"
                    value={user.email}
                    onChange={handleChange}
                    required />
                  <div className="help-text">Required. Your e-mail</div>
                </div>
                <button type="submit" className="submit-btn">Save Changes</button>
                {error && <div style={{ color: 'red' }}>Lỗi: {error}</div>}
                {success && <div style={{ color: 'green' }}>Người dùng đã được cập nhật thành công!</div>}
                <button type="button" className="submit-btn submit-btn-cancel" onClick={() => setIsEditing(false)}>Cancel</button>
              </form>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

export default User;