import React from 'react';

import { mimeTypeToIcon } from './dataTypes';

import {
  FileAltIcon,
  FileArchiveIcon,
  FileAudioIcon,
  FileCodeIcon,
  FileExcelIcon,
  FileFallbackIcon,
  FileImageIcon,
  FilePdfIcon,
  FilePowerPointIcon,
  FileVideoIcon,
  FileWordIcon,
  IconPropsV1,
} from './FileIconSet';

export type FileIconPropsV1 = {
  filename?: string;
  mimeType?: string;
  big?: boolean;
  size?: number; // big icon on sent attachment
  sizeSmall?: number; // small icon on file upload preview
};

export const FileIcon = (props: FileIconPropsV1) => {
  const { big = false, mimeType, size = 50, sizeSmall = 20 } = props;

  const Icon = mimeTypeToIcon<IconPropsV1>(
    {
      FilePdfIcon,
      FileWordIcon,
      FileExcelIcon,
      FilePowerPointIcon,
      FileArchiveIcon,
      FileCodeIcon,
      FileAltIcon,
      FileImageIcon,
      FileAudioIcon,
      FileFallbackIcon,
      FileVideoIcon,
    },
    mimeType,
  );

  return <Icon size={big ? size : sizeSmall} />;
};
