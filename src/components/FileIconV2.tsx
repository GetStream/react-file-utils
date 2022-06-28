import React from 'react';

import { mimeTypeToIcon } from './dataTypes';

import {
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
  IconPropsV2,
} from './FileIconSetV2';

type FileIconPropsV2 = IconPropsV2;

export const FileIconV2 = ({ className, mimeType, type }: FileIconPropsV2) => {
  const Icon = mimeTypeToIcon<IconPropsV2>(
    {
      FileAltIcon: FileFallbackIcon,
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
    },
    mimeType,
  );

  return <Icon className={className} type={type} />;
};
