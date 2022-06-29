import React, {
  useCallback,
  MouseEventHandler,
  PropsWithChildren,
  ComponentProps,
  ComponentType,
} from 'react';

import { IconButton } from './IconButton';
import { FilePlaceholder } from './FilePlaceholder';
import { CloseIcon } from './CloseIcon';

export type ThumbnailProps = {
  image: string;
  handleClose?: MouseEventHandler<HTMLButtonElement>;
  WrapperComponent?: ComponentType<PropsWithChildren<Record<string, unknown>>>;
} & Pick<ComponentProps<'img'>, 'alt'>;

const DefaultThumbnailWrapper = ({
  children,
}: PropsWithChildren<Record<never, never>>) => (
  <div className="rfu-thumbnail__wrapper">{children}</div>
);

export const Thumbnail = ({
  image,
  handleClose,
  alt,
  WrapperComponent = DefaultThumbnailWrapper,
}: ThumbnailProps) => {
  const onClose: MouseEventHandler<HTMLButtonElement> = useCallback(
    (event) => handleClose?.(event),
    [handleClose],
  );

  return (
    <WrapperComponent>
      <div className="rfu-thumbnail__overlay">
        {handleClose && (
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        )}
      </div>
      {image ? (
        <img src={image} className="rfu-thumbnail__image" alt={alt ?? ''} />
      ) : (
        <FilePlaceholder
          preserveAspectRatio="xMinYMin slice"
          className="rfu-thumbnail__image"
        />
      )}
    </WrapperComponent>
  );
};
