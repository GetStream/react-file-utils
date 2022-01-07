import React, { useCallback } from 'react';
import Dropzone from 'react-dropzone';

export type ImageDropzoneProps = {
  handleFiles?: (files: FileList | File[]) => void;
  /** Allow drag 'n' drop (or selection from the file dialog) of multiple files */
  multiple?: boolean;
  /** Enable/disable the dropzone */
  disabled?: boolean;
  /**
   * Set accepted file types. See https://github.com/okonet/attr-accept for more information. Keep in mind that mime type determination is not reliable across platforms. CSV files, for example, are reported as text/plain under macOS but as application/vnd.ms-excel under Windows. In some cases there might not be a mime type set at all.
   *
   * One of type: `string, string[]`
   */
  accept?: string | string[];
  maxNumberOfFiles?: number;
};

export const ImageDropzone: React.FC<ImageDropzoneProps> = ({
  handleFiles,
  maxNumberOfFiles,
  children,
  accept,
  multiple,
  disabled,
}) => {
  const handleDrop = useCallback(
    (accepted: File[]) => {
      if (!handleFiles) {
        return;
      }

      if (accepted && accepted.length) {
        handleFiles(accepted);
      }
    },
    [handleFiles],
  );

  return (
    <Dropzone
      onDrop={handleDrop}
      maxFiles={maxNumberOfFiles}
      accept={accept}
      multiple={multiple}
      disabled={disabled}
    >
      {({ getRootProps, isDragAccept, isDragReject }) => (
        <div
          {...getRootProps({
            style: { position: 'relative' },
            className: `
          rfu-dropzone
          ${isDragAccept ? 'rfu-dropzone--accept' : ''}
          ${isDragReject ? 'rfu-dropzone--reject' : ''}
        `,
          })}
          tabIndex={-1}
        >
          <div className="rfu-dropzone__notifier">
            <div className="rfu-dropzone__inner">
              <svg
                width="41"
                height="41"
                viewBox="0 0 41 41"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M40.517 28.002V3.997c0-2.197-1.808-3.992-4.005-3.992H12.507a4.004 4.004 0 0 0-3.992 3.993v24.004a4.004 4.004 0 0 0 3.992 3.993h24.005c2.197 0 4.005-1.795 4.005-3.993zm-22.002-7.997l4.062 5.42 5.937-7.423 7.998 10H12.507l6.008-7.997zM.517 8.003V36c0 2.198 1.795 4.005 3.993 4.005h27.997V36H4.51V8.002H.517z"
                  fill="#000"
                  fillRule="nonzero"
                />
              </svg>
              <p>Drag your files here to add to your post</p>
            </div>
          </div>
          {children}
        </div>
      )}
    </Dropzone>
  );
};
