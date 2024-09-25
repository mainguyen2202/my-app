import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { createUser, fetchUserById, updateUser } from '../../redux/usersSlice';

interface UserFormProps {
  userId: number;
}

const UserFormEdit: React.FC<UserFormProps> = ({ userId }) => {
  const dispatch = useDispatch<AppDispatch>(); // Sử dụng kiểu AppDispatch
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [avatar, setAvatar] = useState('');
  // const { users, loading, error } = useSelector((state: RootState) => state.users);
  const { users, currentUser, loading, error } = useSelector((state: RootState) => state.users);

  // Lấy thông tin người dùng khi component mount
  useEffect(() => {
    if (userId) {
      dispatch(fetchUserById(userId));
    }
  }, [dispatch, userId]);

  // Cập nhật state khi người dùng thay đổi
  useEffect(() => {
    if (currentUser) {
      setAvatar(currentUser.avatar);
      setEmail(currentUser.email);
      setFirstName(currentUser.first_name);
      setLastName(currentUser.last_name);
    }
  }, [currentUser]);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (users) {
      dispatch(updateUser({
        id: userId, email, first_name: firstName, last_name: lastName,
        avatar: ''
      }));

      console.log("update thanh cong currentUser");
    }
  };



  return (


    <div >

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

     

      <div className="form-group">
        <img 
        src={avatar} 
        alt={`${firstName} ${lastName}`} 
      
        width={100} />
        <button type="button" className="upload-btn">Upload</button>
      </div>


      <div className="form-group">
        <label className="label-text">first_name</label>
        <input type="text"
          name="first_name"
          placeholder="Họ"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required />
        <div className="help-text">Required. Your name</div>
      </div>
      <div className="form-group">
        <label className="label-text">last_name</label>
        <input type="text"
          name="last_name"
          placeholder="Tên"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required />
        <div className="help-text">Required. Your name</div>
      </div>
      <div className="form-group">
        <label className="label-text">Email</label>
        <input type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required />
        <div className="help-text">Required. Your e-mail</div>
      </div>
      <button onClick={handleSubmit} className="btn submit-btn">
        Submit
      </button>
      {/* <button type="submit" className="submit-btn" disabled={loading}>
{loading ? 'Đang Tạo...' : 'Tạo Người Dùng'}
</button>
{error && <div style={{ color: 'red' }}>Lỗi: {error}</div>}
{success && <div style={{ color: 'green' }}>Người dùng đã được tạo thành công!</div>} */}


    </div>
  );
};

export default UserFormEdit;