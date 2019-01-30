// @flow

export type UploadState = 'uploading' | 'finished' | 'failed';

export type FileLike = Blob | File;

export type UploadInfo = {|
  id: string,
  url?: string,
  state: UploadState,
|};

export type FileUpload = {|
  ...UploadInfo,
  file: File,
|};

export type ImageUpload = {|
  ...UploadInfo,
  file: Blob | File,
  previewUri?: string,
|};
