import React, { useCallback, MouseEventHandler } from 'react';

import { IconButton } from './IconButton';
import { FilePlaceholder } from './FilePlaceholder';
import { CloseIcon } from './CloseIcon';

export type ThumbnailProps = {
  handleClose?: MouseEventHandler<HTMLButtonElement>;
  size?: number;
  image: string;
  alt?: string;
  id?: string;
};

export const Thumbnail = ({
  image,
  size = 100,
  handleClose,
  alt,
}: ThumbnailProps) => {
  const onClose: MouseEventHandler<HTMLButtonElement> = useCallback(
    (event) => handleClose?.(event),
    [handleClose],
  );

  return (
    <div
      className="rfu-thumbnail__wrapper"
      style={{ width: size, height: size }}
    >
      <div className="rfu-thumbnail__overlay">
        {handleClose ? (
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </div>
      {image ? (
        <img src={image} className="rfu-thumbnail__image" alt={alt ?? ''} />
      ) : (
        <FilePlaceholder
          preserveAspectRatio="xMinYMin slice"
          className="rfu-thumbnail__image"
        />
      )}
    </div>
  );
};
