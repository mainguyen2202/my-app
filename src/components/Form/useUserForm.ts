// hooks/useUserForm.ts
import { useState } from 'react';

const useUserForm = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [errors, setErrors] = useState({
    email: '',
    firstName: '',
    lastName: '',
  });

  const resetForm = () => {
    setEmail('');
    setFirstName('');
    setLastName('');
    setAvatar('');
    setErrors({ email: '', firstName: '', lastName: '' });
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

  return {
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
  };
};

export default useUserForm;