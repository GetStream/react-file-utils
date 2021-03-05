// @flow
import React from 'react';
import FileIcon from './FileIcon';
import LoadingIndicator from './LoadingIndicator';
import type { FileUpload } from '../types';

type Props = {|
  uploads?: FileUpload[],
  handleRemove?: (id: string) => mixed,
  handleRetry?: (id: string) => mixed,
  handleFiles?: (files: File[]) => mixed,
|};

/**
 * Component that displays files which are being uploaded
 *
 * @example ./examples/FilePreviewer.md
 */
export default class FilePreviewer extends React.Component<Props> {
  render() {
    const { uploads, handleRemove, handleRetry } = this.props;
    return (
      <div className="rfu-file-previewer">
        <ol>
          {uploads &&
            uploads.map((upload) => (
              <li
                key={upload.id}
                className={`rfu-file-previewer__file ${
                  upload.state === 'uploading'
                    ? 'rfu-file-previewer__file--uploading'
                    : ''
                } ${
                  upload.state === 'failed'
                    ? 'rfu-file-previewer__file--failed'
                    : ''
                }`}
              >
                <FileIcon
                  mimeType={upload.file.type}
                  filename={upload.file.name}
                />

                <a href={upload.url} download>
                  {upload.file.name}
                  {upload.state === 'failed' && (
                    <React.Fragment>
                      <div
                        className="rfu-file-previewer__failed"
                        onClick={handleRetry && (() => handleRetry(upload.id))}
                      >
                        failed
                      </div>
                      <div
                        className="rfu-file-previewer__retry"
                        onClick={handleRetry && (() => handleRetry(upload.id))}
                      >
                        retry
                      </div>
                    </React.Fragment>
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
  }
}
