export type UploadState = 'uploading' | 'finished' | 'failed';

export type FileLike = Blob | File;

export type UploadInfo = {
  id: string;
  url?: string;
  state: UploadState;
};

export type FileUpload = {
  file: File;
} & UploadInfo;

export type ImageUpload = {
  file: Blob | File;
  previewUri?: string;
} & UploadInfo;
