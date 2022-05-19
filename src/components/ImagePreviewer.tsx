import React, { useCallback, MouseEvent } from 'react';

import { LoadingIndicator } from './LoadingIndicator';
import { Thumbnail } from './Thumbnail';
import { ThumbnailPlaceholder } from './ThumbnailPlaceholder';
import { RetryIcon } from './RetryIcon';

import type { ImageUpload } from '../types';

type CustomMouseEvent = (
  id: string,
  event: MouseEvent<HTMLButtonElement>,
) => void;

export type ImagePreviewerProps = {
  /** The list of image uploads that should be displayed */
  imageUploads?: ImageUpload[];
  /** A callback to call when the remove icon is clicked */
  handleRemove?: CustomMouseEvent;
  /** A callback to call when the retry icon is clicked */
  handleRetry?: CustomMouseEvent;
  /** A callback to call with newly selected files. If this is not provided no
   * `ThumbnailPlaceholder` will be displayed.
   */
  handleFiles?: (files: File[]) => void;
  /** Allow drag 'n' drop (or selection from the file dialog) of multiple files */
  multiple?: boolean;
  disabled?: boolean;
};

export const ImagePreviewer = ({
  multiple = true,
  disabled = false,
  imageUploads,
  handleRemove,
  handleRetry,
  handleFiles,
}: ImagePreviewerProps) => {
  const onClose: CustomMouseEvent = useCallback(
    (id, event) => {
      if (!id)
        return console.warn(
          `image.id of closed image was "null", this shouldn't happen`,
        );
      handleRemove?.(id, event);
    },
    [handleRemove],
  );

  return (
    <div className="rfu-image-previewer">
      {imageUploads?.map((image) => {
        const url = image.url || image.previewUri;
        return (
          <div
            key={image.id}
            className={`rfu-image-previewer__image${
              image.state === 'finished'
                ? ' rfu-image-previewer__image--loaded'
                : ''
            }`}
          >
            {image.state === 'failed' && (
              <button
                aria-label="Retry upload"
                className="rfu-image-previewer__retry"
                onClick={(event) => handleRetry?.(image.id, event)}
              >
                <RetryIcon />
              </button>
            )}

            {url && (
              <Thumbnail
                handleClose={(event) => onClose(image.id, event)}
                image={url}
              />
            )}
            {image.state === 'uploading' && (
              <LoadingIndicator backgroundColor="#ffffff19" color="#ffffffb2" />
            )}
          </div>
        );
      })}
      {handleFiles && !disabled && (
        <ThumbnailPlaceholder handleFiles={handleFiles} multiple={multiple} />
      )}
    </div>
  );
};
