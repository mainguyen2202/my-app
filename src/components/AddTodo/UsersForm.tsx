import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { createUser } from '../../redux/usersSlice';

const UsersForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>(); // Sử dụng kiểu AppDispatch
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [avatar, setAvatar] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(createUser({
      id: 0,
      email: email,
      first_name: firstName,
      last_name: lastName,

      avatar: avatar
    }));
    setEmail('');
    setFirstName('');
    setLastName('');
    console.log("thanh cong")
  };

  

  return (


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

export default UsersForm;