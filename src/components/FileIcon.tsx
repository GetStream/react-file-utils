// @flow
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { default as BigFileIcon, defaultStyles } from 'react-file-icon';
import {
  faFileWord,
  faFileExcel,
  faFilePowerpoint,
  faFileArchive,
  faFileCode,
  faFileAudio,
  faFileVideo,
  faFileImage,
  faFilePdf,
  faFileAlt,
  faFile,
} from '@fortawesome/free-regular-svg-icons';

export type Props = {|
  filename: ?string,
  mimeType: ?string,
  big: boolean,
  // Size used for big icon
  size: number,
|};

// Partially based on:
// https://stackoverflow.com/a/4212908/2570866

const wordMimeTypes = [
  // Microsoft Word
  // .doc .dot
  'application/msword',
  // .doc .dot
  'application/msword-template',
  // .docx
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  // .dotx (no test)
  'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
  // .docm
  'application/vnd.ms-word.document.macroEnabled.12',
  // .dotm (no test)
  'application/vnd.ms-word.template.macroEnabled.12',

  // LibreOffice/OpenOffice Writer
  // .odt
  'application/vnd.oasis.opendocument.text',
  // .ott
  'application/vnd.oasis.opendocument.text-template',
  // .fodt
  'application/vnd.oasis.opendocument.text-flat-xml',
  // .uot
  // NOTE: firefox doesn't know mimetype so maybe ignore
];

const excelMimeTypes = [
  // .csv
  'text/csv',
  // TODO: maybe more data files

  // Microsoft Excel
  // .xls .xlt .xla (no test for .xla)
  'application/vnd.ms-excel',
  // .xlsx
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  // .xltx (no test)
  'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
  // .xlsm
  'application/vnd.ms-excel.sheet.macroEnabled.12',
  // .xltm (no test)
  'application/vnd.ms-excel.template.macroEnabled.12',
  // .xlam (no test)
  'application/vnd.ms-excel.addin.macroEnabled.12',
  // .xlsb (no test)
  'application/vnd.ms-excel.addin.macroEnabled.12',

  // LibreOffice/OpenOffice Calc
  // .ods
  'application/vnd.oasis.opendocument.spreadsheet',
  // .ots
  'application/vnd.oasis.opendocument.spreadsheet-template',
  // .fods
  'application/vnd.oasis.opendocument.spreadsheet-flat-xml',
  // .uos
  // NOTE: firefox doesn't know mimetype so maybe ignore
];

const powerpointMimeTypes = [
  // Microsoft Word
  // .ppt .pot .pps .ppa (no test for .ppa)
  'application/vnd.ms-powerpoint',
  // .pptx
  'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  // .potx (no test)
  'application/vnd.openxmlformats-officedocument.presentationml.template',
  // .ppsx
  'application/vnd.openxmlformats-officedocument.presentationml.slideshow',
  // .ppam
  'application/vnd.ms-powerpoint.addin.macroEnabled.12',
  // .pptm
  'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
  // .potm
  'application/vnd.ms-powerpoint.template.macroEnabled.12',
  // .ppsm
  'application/vnd.ms-powerpoint.slideshow.macroEnabled.12',

  // LibreOffice/OpenOffice Writer
  // .odp
  'application/vnd.oasis.opendocument.presentation',
  // .otp
  'application/vnd.oasis.opendocument.presentation-template',
  // .fodp
  'application/vnd.oasis.opendocument.presentation-flat-xml',
  // .uop
  // NOTE: firefox doesn't know mimetype so maybe ignore
];

const archiveFileTypes = [
  // .zip
  'application/zip',
  // .z7
  'application/x-7z-compressed',
  // .ar
  'application/x-archive',
  // .tar
  'application/x-tar',
  // .tar.gz
  'application/gzip',
  // .tar.Z
  'application/x-compress',
  // .tar.bz2
  'application/x-bzip',
  // .tar.lz
  'application/x-lzip',
  // .tar.lz4
  'application/x-lz4',
  // .tar.lzma
  'application/x-lzma',
  // .tar.lzo (no test)
  'application/x-lzop',
  // .tar.xz
  'application/x-xz',
  // .war
  'application/x-webarchive',
  // .rar
  'application/vnd.rar',
];

const codeFileTypes = [
  // .html .htm
  'text/html',
  // .css
  'text/css',
  // .js
  'application/x-javascript',
  // .json
  'application/json',
  // .py
  'text/x-python',
  // .go
  'text/x-go',
  // .c
  'text/x-csrc',
  // .cpp
  'text/x-c++src',
  // .rb
  'application/x-ruby',
  // .rust
  'text/rust',
  // .java
  'text/x-java',
  // .php
  'application/x-php',
  // .cs
  'text/x-csharp',
  // .scala
  'text/x-scala',
  // .erl
  'text/x-erlang',
  // .sh
  'application/x-shellscript',
];

const mimeTypeToIconMap: { [string]: string } = {
  'application/pdf': faFilePdf,
};

const mimeTypeToFallBackStyle: { [string]: {} } = {
  'application/pdf': defaultStyles.pdf,
};

for (const type of wordMimeTypes) {
  mimeTypeToIconMap[type] = faFileWord;
  mimeTypeToFallBackStyle[type] = { type: 'document' };
}

for (const type of excelMimeTypes) {
  mimeTypeToIconMap[type] = faFileExcel;
  mimeTypeToFallBackStyle[type] = { type: 'spreadsheet' };
}

for (const type of powerpointMimeTypes) {
  mimeTypeToIconMap[type] = faFilePowerpoint;
  mimeTypeToFallBackStyle[type] = { type: 'presentation' };
}

for (const type of archiveFileTypes) {
  mimeTypeToIconMap[type] = faFileArchive;
  mimeTypeToFallBackStyle[type] = { type: 'compressed' };
}

for (const type of codeFileTypes) {
  mimeTypeToIconMap[type] = faFileCode;
  mimeTypeToFallBackStyle[type] = { type: 'code' };
}

function mimeTypeToIcon(mimeType: ?string) {
  if (mimeType == null) {
    return faFile;
  }

  const icon = mimeTypeToIconMap[mimeType];
  if (icon) {
    return icon;
  }
  if (mimeType.startsWith('audio/')) {
    return faFileAudio;
  }
  if (mimeType.startsWith('video/')) {
    return faFileVideo;
  }
  if (mimeType.startsWith('image/')) {
    return faFileImage;
  }
  if (mimeType.startsWith('text/')) {
    return faFileAlt;
  }
  return faFile;
}

function mimeTypeToStyle(mimeType: ?string) {
  if (mimeType == null) {
    return {};
  }

  const style = mimeTypeToStyle[mimeType];
  if (style) {
    return style;
  }
  if (mimeType.startsWith('audio/')) {
    return { type: 'audio' };
  }
  if (mimeType.startsWith('video/')) {
    return { type: 'video' };
  }
  if (mimeType.startsWith('image/')) {
    return { type: 'image' };
  }
  if (mimeType.startsWith('text/')) {
    return { type: 'document' };
  }
  return {};
}

function fileExtension(filename: ?string) {
  const defaultReturn = {
    full: '',
    end: '',
  };
  if (filename == null) {
    return defaultReturn;
  }

  // source: https://stackoverflow.com/a/1203361/2570866
  const a = filename.split('.');
  if (a.length === 1 || (a[0] === '' && a.length === 2)) {
    return defaultReturn;
  }
  const lastExtension = a.pop().toLowerCase();
  if (a.length === 1 || (a[0] === '' && a.length === 2)) {
    return { end: lastExtension, full: lastExtension };
  }
  const secondToLastExtension = a.pop().toLowerCase();
  if (secondToLastExtension !== 'tar') {
    return { end: lastExtension, full: lastExtension };
  }
  return {
    full: secondToLastExtension + '.' + lastExtension,
    end: lastExtension,
  };
}

/**
 * @example ./examples/FileIcon.md
 */
export default class FileIcon extends React.Component<Props> {
  static defaultProps = {
    big: false,
    size: 50,
  };
  render() {
    const { size, big, filename, mimeType } = this.props;
    if (big) {
      const extension = fileExtension(filename);
      let style = defaultStyles[extension.end];
      if (!style) {
        style = mimeTypeToStyle(style);
      }
      return <BigFileIcon extension={extension.full} {...style} size={size} />;
    }
    return (
      <FontAwesomeIcon
        className="rfu-file-icon--small"
        icon={mimeTypeToIcon(mimeType)}
      />
    );
  }
}
