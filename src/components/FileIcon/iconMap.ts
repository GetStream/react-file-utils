import { ComponentType } from 'react';

import * as v1 from './FileIconSet/v1';
import { IconPropsV1 } from './FileIconSet/v1';
import * as v2 from './FileIconSet/v2';
import { IconPropsV2 } from './FileIconSet/v2';
import {
  archiveFileTypes,
  codeFileTypes,
  excelMimeTypes,
  GeneralType,
  powerpointMimeTypes,
  SupportedMimeType,
  wordMimeTypes,
} from './mimeTypes';

type MimeTypeMappedComponent =
  | 'FilePdfIcon'
  | 'FileWordIcon'
  | 'FileExcelIcon'
  | 'FilePowerPointIcon'
  | 'FileArchiveIcon'
  | 'FileCodeIcon';

type GeneralContentTypeComponent =
  | 'FileImageIcon'
  | 'FileAudioIcon'
  | 'FileVideoIcon'
  | 'FileAltIcon';

type IconComponents<Props> = {
  FilePdfIcon: ComponentType<Props>;
  FileWordIcon: ComponentType<Props>;
  FileExcelIcon: ComponentType<Props>;
  FilePowerPointIcon: ComponentType<Props>;
  FileArchiveIcon: ComponentType<Props>;
  FileCodeIcon: ComponentType<Props>;
  FileAltIcon: ComponentType<Props>;
  FileImageIcon: ComponentType<Props>;
  FileAudioIcon: ComponentType<Props>;
  FileFallbackIcon: ComponentType<Props>;
  FileVideoIcon: ComponentType<Props>;
};

type MimeTypeToIconMap<Props> = {
  [key: string]: ComponentType<Props>;
};

function generateMimeTypeToIconMap<Props>({
  FilePdfIcon,
  FileWordIcon,
  FileExcelIcon,
  FilePowerPointIcon,
  FileArchiveIcon,
  FileCodeIcon,
}: Pick<IconComponents<Props>, MimeTypeMappedComponent>) {
  const mimeTypeToIconMap: MimeTypeToIconMap<Props> = {
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
  return mimeTypeToIconMap;
}

function generateGeneralTypeToIconMap<Props>({
  FileAudioIcon,
  FileVideoIcon,
  FileImageIcon,
  FileAltIcon,
}: Pick<IconComponents<Props>, GeneralContentTypeComponent>) {
  return {
    'audio/': FileAudioIcon,
    'video/': FileVideoIcon,
    'image/': FileImageIcon,
    'text/': FileAltIcon,
  };
}

export type IconType = 'standard' | 'alt';
export type IconVersion = '1' | '2';

type IconProps = {
  '1': IconPropsV1;
  '2': IconPropsV2;
};

type IconMap = {
  [v in IconVersion]: {
    standard: Record<
      SupportedMimeType | GeneralType | 'fallback',
      ComponentType<IconProps[v]>
    >;
    alt?: Record<
      SupportedMimeType | GeneralType | 'fallback',
      ComponentType<IconProps[v]>
    >;
  };
};

export const iconMap: IconMap = {
  '1': {
    standard: {
      ...generateMimeTypeToIconMap<IconPropsV1>({
        FilePdfIcon: v1.FilePdfIcon,
        FileWordIcon: v1.FileWordIcon,
        FileExcelIcon: v1.FileExcelIcon,
        FilePowerPointIcon: v1.FilePowerPointIcon,
        FileArchiveIcon: v1.FileArchiveIcon,
        FileCodeIcon: v1.FileCodeIcon,
      }),
      ...generateGeneralTypeToIconMap<IconPropsV1>({
        FileAltIcon: v1.FileAltIcon,
        FileAudioIcon: v1.FileAudioIcon,
        FileImageIcon: v1.FileImageIcon,
        FileVideoIcon: v1.FileVideoIcon,
      }),
      fallback: v1.FileFallbackIcon,
    },
    alt: {},
  },
  '2': {
    alt: {
      ...generateMimeTypeToIconMap<IconPropsV2>({
        FilePdfIcon: v2.FilePdfIcon,
        FileWordIcon: v2.FileWordIconAlt,
        FileExcelIcon: v2.FileExcelIconAlt,
        FilePowerPointIcon: v2.FilePowerPointIconAlt,
        FileArchiveIcon: v2.FileArchiveIconAlt,
        FileCodeIcon: v2.FileCodeIconAlt,
      }),
      ...generateGeneralTypeToIconMap<IconPropsV2>({
        FileAltIcon: v2.FileFallbackIcon,
        FileAudioIcon: v2.FileAudioIconAlt,
        FileImageIcon: v2.FileImageIcon,
        FileVideoIcon: v2.FileVideoIconAlt,
      }),
      fallback: v2.FileFallbackIcon,
    },
    standard: {
      ...generateMimeTypeToIconMap<IconPropsV2>({
        FilePdfIcon: v2.FilePdfIcon,
        FileWordIcon: v2.FileWordIcon,
        FileExcelIcon: v2.FileExcelIcon,
        FilePowerPointIcon: v2.FilePowerPointIcon,
        FileArchiveIcon: v2.FileArchiveIcon,
        FileCodeIcon: v2.FileCodeIcon,
      }),
      ...generateGeneralTypeToIconMap<IconPropsV2>({
        FileAltIcon: v2.FileFallbackIcon,
        FileAudioIcon: v2.FileAudioIcon,
        FileImageIcon: v2.FileImageIcon,
        FileVideoIcon: v2.FileVideoIcon,
      }),
      fallback: v2.FileFallbackIcon,
    },
  },
};
