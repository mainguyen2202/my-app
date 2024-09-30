import React from 'react';

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  onChange,
  type = 'text',
  placeholder,
  error,
}) => {
  return (
    <div className="form__group">
      <label className="form__label">{label}</label>
      <input
        className="form__input"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
      {error && <div className="form__error-text">{error}</div>}
    </div>
  );
};

export default InputField;