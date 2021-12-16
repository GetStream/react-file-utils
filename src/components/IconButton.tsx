import React from 'react';

export type IconButtonProps = {
  onClick?: (e: React.SyntheticEvent) => void;
};

/**
 * This is simply a button wrapper, add's a div with `role="button"` and a onClick
 */
export const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  children,
}) => (
  <button
    aria-label="Cancel upload"
    className="rfu-icon-button"
    onClick={onClick}
  >
    {children}
  </button>
);
