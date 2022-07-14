import React from 'react';

import { FileIcon } from './FileIcon';
import { LoadingIndicator } from './LoadingIndicator';

import type { FileUpload } from '../types';
import { FileIconProps } from './FileIcon/FileIcon';

export type FilePreviewerProps = {
  fileIconProps?: FileIconProps;
  uploads?: FileUpload[];
  handleRemove?: (id: string) => void;
  handleRetry?: (id: string) => void;
  handleFiles?: (files: FileList) => void;
};

/**
 * Component that displays files which are being uploaded
 */
export const FilePreviewer = ({
  fileIconProps = {},
  uploads,
  handleRemove,
  handleRetry,
}: FilePreviewerProps) => (
  <div className="rfu-file-previewer">
    <ol>
      {uploads?.map((upload) => (
        <li
          key={upload.id}
          className={`rfu-file-previewer__file ${
            upload.state === 'uploading'
              ? 'rfu-file-previewer__file--uploading'
              : ''
          } ${
            upload.state === 'failed' ? 'rfu-file-previewer__file--failed' : ''
          }`}
        >
          <FileIcon mimeType={upload.file.type} {...fileIconProps} />
          <a href={upload.url} download>
            {upload.file.name}
            {upload.state === 'failed' && (
              <>
                <div
                  className="rfu-file-previewer__failed"
                  onClick={() => handleRetry?.(upload.id)}
                >
                  failed
                </div>
                <div
                  className="rfu-file-previewer__retry"
                  onClick={() => handleRetry?.(upload.id)}
                >
                  retry
                </div>
              </>
            )}
          </a>

          <span
            className="rfu-file-previewer__close-button"
            onClick={handleRemove && (() => handleRemove(upload.id))}
          >
            ✘
          </span>
          {upload.state === 'uploading' && (
            <div className="rfu-file-previewer__loading-indicator">
              <LoadingIndicator />
            </div>
          )}
        </li>
      ))}
    </ol>
  </div>
);
