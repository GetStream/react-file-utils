import React from 'react';

import { AttachmentIcon } from './AttachmentIcon';
import { handleFileChange } from '../utils';

export type FileUploadButtonProps = {
  handleFiles: (files: FileList | File[]) => void;
  multiple?: boolean;
  disabled?: boolean;
  accepts?: string | string[];
  resetOnChange?: boolean;
};

export const FileUploadButton: React.FC<FileUploadButtonProps> = ({
  disabled = false,
  multiple = false,
  children = <AttachmentIcon />,
  handleFiles,
  accepts,
  resetOnChange = false,
}) => {
  let className = 'rfu-file-upload-button';
  if (disabled) {
    className = `${className} rfu-file-upload-button--disabled`;
  }
  return (
    <div className={className}>
      <label>
        <input
          type="file"
          className="rfu-file-input"
          onChange={handleFileChange(handleFiles, resetOnChange)}
          multiple={multiple}
          disabled={disabled}
          accept={Array.isArray(accepts) ? accepts.join(',') : accepts}
        />
        {children}
      </label>
    </div>
  );
};
