import React, { ComponentProps } from 'react';

import { useHandleFileChangeWrapper } from '../utils';

export type UploadButtonProps = {
  resetOnChange?: boolean;
  onFileChange: (files: Array<File>) => void;
} & Omit<ComponentProps<'input'>, 'type' | 'onChange'>;

export const UploadButton = ({
  resetOnChange = true,
  onFileChange,
  ...rest
}: UploadButtonProps) => {
  const handleInputChange = useHandleFileChangeWrapper(
    resetOnChange,
    onFileChange,
  );

  return <input type="file" onChange={handleInputChange} {...rest} />;
};
