import React from 'react';

export type LoadingIndicatorProps = {
  color?: string;
  backgroundColor?: string;
  size?: number;
  width?: number;
};

export const LoadingIndicator = ({
  size = 20,
  width = 2,
  backgroundColor,
  color,
}: LoadingIndicatorProps) => (
  <div
    className="rfu-loading-indicator__spinner"
    style={{
      margin: '0 auto',
      borderColor: backgroundColor ? backgroundColor : '',
      borderTopColor: color ? color : '',
      width: size ? size : '',
      height: size ? size : '',
      borderWidth: width ? width : '',
    }}
  />
);
