import React, { PropsWithChildren, MouseEventHandler } from 'react';

export type IconButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

/**
 * This is simply a button wrapper, add's a div with `role="button"` and a onClick
 */
export const IconButton = ({
  onClick,
  children,
}: PropsWithChildren<IconButtonProps>) => (
  <button
    aria-label="Cancel upload"
    className="rfu-icon-button"
    onClick={onClick}
  >
    {children}
  </button>
);
