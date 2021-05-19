import React from 'react';
import {
  default as BigFileIcon,
  defaultStyles,
  DefaultExtensionType,
  FileIconProps as ReactFileIconProps,
} from 'react-file-icon';

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
  // Size used for big icon
  size?: number;
};

// Partially based on: https://stackoverflow.com/a/4212908/2570866
const mimeTypeToIconMap: {
  [key: string]: React.FC;
} = {
  'application/pdf': FilePdfIcon,
};

const mimeTypeToFallBackStyle: {
  [key: string]: Partial<BigFileIcon.FileIconProps>;
} = {
  'application/pdf': defaultStyles.pdf,
};

for (const type of wordMimeTypes) {
  mimeTypeToIconMap[type] = FileWordIcon;
  mimeTypeToFallBackStyle[type] = { type: 'document' };
}

for (const type of excelMimeTypes) {
  mimeTypeToIconMap[type] = FileExcelIcon;
  mimeTypeToFallBackStyle[type] = { type: 'spreadsheet' };
}

for (const type of powerpointMimeTypes) {
  mimeTypeToIconMap[type] = FilePowerPointIcon;
  mimeTypeToFallBackStyle[type] = { type: 'presentation' };
}

for (const type of archiveFileTypes) {
  mimeTypeToIconMap[type] = FileArchiveIcon;
  mimeTypeToFallBackStyle[type] = { type: 'compressed' };
}

for (const type of codeFileTypes) {
  mimeTypeToIconMap[type] = FileCodeIcon;
  mimeTypeToFallBackStyle[type] = { type: 'code' };
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

function mimeTypeToStyle(mimeType?: string): Partial<ReactFileIconProps> {
  if (mimeType == null) return {};

  const style = mimeTypeToFallBackStyle[mimeType];
  if (style) return style;

  if (mimeType.startsWith('audio/')) return { type: 'audio' };
  if (mimeType.startsWith('video/')) return { type: 'video' };
  if (mimeType.startsWith('image/')) return { type: 'image' };
  if (mimeType.startsWith('text/')) return { type: 'document' };

  return {};
}

function fileExtension(filename?: string) {
  const defaultReturn = { full: '', end: '' };
  if (filename == null) return defaultReturn;

  // source: https://stackoverflow.com/a/1203361/2570866
  const a = filename.split('.');
  if (a.length === 1 || (a[0] === '' && a.length === 2)) {
    return defaultReturn;
  }

  const lastExtension = a.pop()?.toLowerCase();
  if (a.length === 1 || (a[0] === '' && a.length === 2)) {
    return { end: lastExtension, full: lastExtension };
  }

  const secondToLastExtension = a.pop()?.toLowerCase();
  if (secondToLastExtension !== 'tar') {
    return { end: lastExtension, full: lastExtension };
  }

  return {
    full: secondToLastExtension + '.' + lastExtension,
    end: lastExtension,
  };
}

export const FileIcon: React.FC<FileIconProps> = ({
  big = false,
  filename,
  mimeType,
  size = 50,
}) => {
  if (big) {
    const extension = fileExtension(filename);

    let style =
      extension.end && defaultStyles[extension.end as DefaultExtensionType];

    if (!style) {
      style = mimeTypeToStyle(style);
    }

    // @ts-expect-error types for file-icon are for newer version, which doesn't have a default export
    return <BigFileIcon extension={extension.full} {...style} size={size} />;
  }

  const Icon = mimeTypeToIcon(mimeType);

  if (!Icon) return null;

  return <Icon />;
};
