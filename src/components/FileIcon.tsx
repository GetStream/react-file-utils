import React from 'react';

import {
  archiveFileTypes,
  codeFileTypes,
  excelMimeTypes,
  powerpointMimeTypes,
  wordMimeTypes,
} from './dataTypes';
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
} from './FileIconSet';

export type FileIconProps = {
  filename?: string;
  mimeType?: string;
  big?: boolean;
  size?: number; // big icon on sent attachment
  sizeSmall?: number; // small icon on file upload preview
};

// Partially based on: https://stackoverflow.com/a/4212908/2570866
const mimeTypeToIconMap: {
  [key: string]: React.FC;
} = {
  'application/pdf': FilePdfIcon,
};

for (const type of wordMimeTypes) {
  mimeTypeToIconMap[type] = FileWordIcon;
}

for (const type of excelMimeTypes) {
  mimeTypeToIconMap[type] = FileExcelIcon;
}

for (const type of powerpointMimeTypes) {
  mimeTypeToIconMap[type] = FilePowerPointIcon;
}

for (const type of archiveFileTypes) {
  mimeTypeToIconMap[type] = FileArchiveIcon;
}

for (const type of codeFileTypes) {
  mimeTypeToIconMap[type] = FileCodeIcon;
}

function mimeTypeToIcon(mimeType?: string) {
  if (mimeType == null) return FileFallbackIcon;

  const icon = mimeTypeToIconMap[mimeType];
  if (icon) return icon;

  if (mimeType.startsWith('audio/')) return FileAudioIcon;
  if (mimeType.startsWith('video/')) return FileVideoIcon;
  if (mimeType.startsWith('image/')) return FileImageIcon;
  if (mimeType.startsWith('text/')) return FileAltIcon;

  return FileFallbackIcon;
}

export const FileIcon: React.FC<FileIconProps> = (props) => {
  const { big = false, mimeType, size = 50, sizeSmall = 20 } = props;

  const Icon = mimeTypeToIcon(mimeType);

  return <Icon size={big ? size : sizeSmall} />;
};
