import React from 'react';

import { AttachmentIcon } from './AttachmentIcon';
import { useHandleFileChangeWrapper } from '../utils';

export type FileUploadButtonProps = {
  handleFiles: (files: FileList | File[]) => void;
  multiple?: boolean;
  disabled?: boolean;
  accepts?: string | string[];
  resetOnChange?: boolean;
};

export const FileUploadButton = ({
  disabled = false,
  multiple = false,
  children = <AttachmentIcon />,
  handleFiles,
  accepts,
  resetOnChange = true,
}: React.PropsWithChildren<FileUploadButtonProps>) => {
  let className = 'rfu-file-upload-button';
  if (disabled) {
    className = `${className} rfu-file-upload-button--disabled`;
  }

  const onFileChange = useHandleFileChangeWrapper(resetOnChange, handleFiles);

  return (
    <div className={className}>
      <label>
        <input
          aria-label="File input"
          type="file"
          className="rfu-file-input"
          onChange={onFileChange}
          multiple={multiple}
          disabled={disabled}
          accept={Array.isArray(accepts) ? accepts.join(',') : accepts}
        />
        {children}
      </label>
    </div>
  );
};
