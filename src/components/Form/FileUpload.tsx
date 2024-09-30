import React from 'react';

interface FileUploadProps {
  avatar: string;
  onUpload: () => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ avatar, onUpload }) => {
  return (
    <div className="form__group">
      <img  className="form__avatar" src={avatar} alt="Avatar" width={100} />
      <button type="button" className="form__upload-btn" onClick={onUpload}>
        Upload
      </button>
    </div>
  );
};

export default FileUpload;