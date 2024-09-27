import React from 'react';

interface FileUploadProps {
  avatar: string;
  onUpload: () => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ avatar, onUpload }) => {
  return (
    <div className="form-group">
      <img src={avatar} alt="Avatar" width={100} />
      <button type="button" className="upload-btn" onClick={onUpload}>
        Upload
      </button>
    </div>
  );
};

export default FileUpload;