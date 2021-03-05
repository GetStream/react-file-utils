import React from 'react';
import PictureIcon from './PictureIcon';

type Props = {
  handleFiles: (files: FileList) => any;
  multiple?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
};

/**
 * Component is described here.
 *
 * @example ./examples/ImageUploadButton.md
 */
const ImageUploadButton: React.FC<Props> = (props) => {
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
              handleFiles(files);
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
