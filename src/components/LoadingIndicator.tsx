import React from 'react';

type Props = {
  color?: string,
  backgroundColor?: string,
  size?: number,
  width?: number,
};

/**
 * Component is described here.
 *
 * @example ./examples/LoadingIndicator.md
 */
const LoadingIndicator: React.FC<Props> = (props) => {
  const {
    size = 20,
    width = 2,
    backgroundColor,
    color,
  } = props;

  return (
    <div
      className="rfu-loading-indicator__spinner"
      style={{
        margin: '0 auto',
        borderColor: backgroundColor
          ? backgroundColor
          : '',
        borderTopColor: color ? color : '',
        width: size ? size : '',
        height: size ? size : '',
        borderWidth: width ? width : '',
      }}
    />
  );
};

export default LoadingIndicator;
