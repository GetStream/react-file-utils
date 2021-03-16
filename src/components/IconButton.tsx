import React from 'react';

export type IconButtonProps = {
  onClick?: (e: React.SyntheticEvent) => void;
};

/**
 * This is simply a button wrapper, add's a div with `role="button"` and a onClick
 */
const IconButton: React.FC<IconButtonProps> = ({ onClick, children }) => (
  <div className="rfu-icon-button" role="button" onClick={onClick}>
    {children}
  </div>
);

export default IconButton;
