import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { createUser, fetchUserById, updateUser } from '../../redux/thunks';
import FileUpload from './FileUpload';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useUserForm from './useUserForm';
import InputField from './InputFieldProps';

interface UserFormProps {
  userId?: number;
}

const UserForm: React.FC<UserFormProps> = ({ userId }) => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    email,
    firstName,
    lastName,
    avatar,
    errors,
    setEmail,
    setFirstName,
    setLastName,
    setAvatar,
    resetForm,
    validate,
  } = useUserForm();

  const { currentUser, loading, error } = useSelector((state: RootState) => state.users);

  // Fetch user information only when userId changes
  useEffect(() => {
    if (userId) {
      dispatch(fetchUserById(userId));
    } else {
      resetForm();
    }
  // }, [dispatch, userId, resetForm]);
}, [dispatch, userId]);

  // Update form fields when currentUser changes
  useEffect(() => {
    if (currentUser) {
      setAvatar(currentUser.avatar);
      setEmail(currentUser.email);
      setFirstName(currentUser.first_name);
      setLastName(currentUser.last_name);
    }
  }, [currentUser, setAvatar, setEmail, setFirstName, setLastName]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      try {
        if (userId) {
          await dispatch(updateUser({
            id: userId,
            email,
            first_name: firstName,
            last_name: lastName,
            avatar,
          }));
          toast.success("User updated successfully!");
          console.log("Cập nhật thành công");
        } else {
          await dispatch(createUser({
            id: 0,
            email,
            first_name: firstName,
            last_name: lastName,
            avatar,
          }));
          resetForm();
          toast.success("User created successfully!");
          console.log("Tạo người dùng thành công");
        }
      } catch {
        toast.error("Operation failed.");
      }
    }
  };

  return (
    <div className='form' >
      <ToastContainer />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <FileUpload avatar={avatar} onUpload={() => console.log("Upload clicked")} />
      <InputField
        label="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        error={errors.firstName}
      />
      <InputField
        label="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        error={errors.lastName}
      />
      <InputField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={errors.email}
      />
      <button onClick={handleSubmit}   className="form__submit-btn">
        Submit
      </button>
    </div>
  );
};

export default UserForm;