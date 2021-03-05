import React from 'react';

export type Props = {
  children?: React.ReactNode;
  onClick?: (e: React.SyntheticEvent) => any;
};

/**
 * This is simply a button wrapper, add's a div with `role="button"` and a onClick
 * @example ./examples/IconButton.md
 */
const IconButton: React.FC<Props> = ({ onClick, children }) => (
  <div className="rfu-icon-button" role="button" onClick={onClick}>
    {children}
  </div>
);

export default IconButton;
