import React from 'react';

import { PictureIcon } from './PictureIcon';
import { handleFileChange } from '../utils';

export type ImageUploadButtonProps = {
  handleFiles: (files: File[]) => void;
  multiple?: boolean;
  disabled?: boolean;
  resetOnChange?: boolean;
};

export const ImageUploadButton: React.FC<ImageUploadButtonProps> = (props) => {
  const {
    multiple = false,
    disabled = false,
    handleFiles,
    children = <PictureIcon />,
    resetOnChange = false,
  } = props;

  return (
    <div className="rfu-image-upload-button">
      <label>
        <input
          type="file"
          className="rfu-image-input"
          onChange={handleFileChange(handleFiles, resetOnChange)}
          accept="image/*"
          multiple={multiple}
          disabled={disabled}
        />
        {children}
      </label>
    </div>
  );
};
