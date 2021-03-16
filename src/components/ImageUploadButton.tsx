import React from 'react';

import PictureIcon from './PictureIcon';

export type ImageUploadButtonProps = {
  handleFiles: (files: File[]) => unknown;
  multiple?: boolean;
  disabled?: boolean;
};

const ImageUploadButton: React.FC<ImageUploadButtonProps> = (props) => {
  const {
    multiple = false,
    disabled = false,
    handleFiles,
    children = <PictureIcon />,
  } = props;

  return (
    <div className="rfu-image-upload-button">
      <label>
        <input
          type="file"
          className="rfu-image-input"
          onChange={(event) => {
            const files = event.currentTarget.files;
            if (files) {
              handleFiles(Array.from(files));
            }
          }}
          accept="image/*"
          multiple={multiple}
          disabled={disabled}
        />
        {children}
      </label>
    </div>
  );
};

export default ImageUploadButton;
