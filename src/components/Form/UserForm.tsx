import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { createUser, fetchUserById, updateUser } from '../../redux/thunks';

interface UserFormProps {
  userId?: number; // userId là optional để có thể sử dụng cho cả thêm và sửa
}

const UserForm: React.FC<UserFormProps> = ({ userId }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [avatar, setAvatar] = useState('');

  const [errors, setErrors] = useState({
    email: '',
    firstName: '',
    lastName: '',
  });

  const { currentUser, loading, error } = useSelector((state: RootState) => state.users);

  // Lấy thông tin người dùng khi component mount
  useEffect(() => {
    if (userId) {
      dispatch(fetchUserById(userId));
      console.log("Get thành công",userId);
    } else {
      resetForm();
    }
  }, [dispatch, userId]);

  // Cập nhật state khi currentUser thay đổi
  useEffect(() => {
    if (currentUser) {
      setAvatar(currentUser.avatar);
      setEmail(currentUser.email);
      setFirstName(currentUser.first_name);
      setLastName(currentUser.last_name);
    }
  }, [currentUser]);

  const resetForm = () => {
    setAvatar('');
    setEmail('');
    setFirstName('');
    setLastName('');
    setErrors({ email: '', firstName: '', lastName: '' }); // Reset lỗi
  };

  const validate = () => {
    const newErrors = {
      email: '',
      firstName: '',
      lastName: '',
    };
    let isValid = true;

    if (!firstName) {
      newErrors.firstName = 'First name is required.';
      isValid = false;
    }

    if (!lastName) {
      newErrors.lastName = 'Last name is required.';
      isValid = false;
    }

    if (!email) {
      newErrors.email = 'Email is required.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email address is invalid.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      if (userId) {
        dispatch(updateUser({
          id: userId,
          email,
          first_name: firstName,
          last_name: lastName,
          avatar,
        }));
        console.log("Cập nhật thành công");
      } else {
        dispatch(createUser({
          id: 0,
          email,
          first_name: firstName,
          last_name: lastName,
          avatar,
        }));
        resetForm();
        console.log("Tạo người dùng thành công");
      }
    }
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="form-group">
        <img src={avatar} alt={`${firstName} ${lastName}`} width={100} />
        <button type="button" className="upload-btn">Upload</button>
      </div>
      <div className="form-group">
        <label className="label-text">First Name</label>
        <input
          type="text"
          name="first_name"
          placeholder="Họ"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        {errors.firstName && <div className="error-text">{errors.firstName}</div>}
      </div>
      <div className="form-group">
        <label className="label-text">Last Name</label>
        <input
          type="text"
          name="last_name"
          placeholder="Tên"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        {errors.lastName && <div className="error-text">{errors.lastName}</div>}
      </div>
      <div className="form-group">
        <label className="label-text">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {errors.email && <div className="error-text">{errors.email}</div>}
      </div>
      <button onClick={handleSubmit} className="btn submit-btn">
        Submit
      </button>
    </div>
  );
};

export default UserForm;