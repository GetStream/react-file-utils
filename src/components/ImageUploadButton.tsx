import React from 'react';

import { PictureIcon } from './PictureIcon';
import { useHandleFileChangeWrapper } from '../utils';

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

  const onFileChange = useHandleFileChangeWrapper(resetOnChange, handleFiles);

  return (
    <div className="rfu-image-upload-button">
      <label>
        <input
          type="file"
          className="rfu-image-input"
          onChange={onFileChange}
          accept="image/*"
          multiple={multiple}
          disabled={disabled}
        />
        {children}
      </label>
    </div>
  );
};
