export type UploadState = 'uploading' | 'finished' | 'failed';

export type FileLike = Blob | File;

export type UploadInfo = {
  id: string;
  state: UploadState;
  url?: string;
};

export type FileUpload = {
  file: {
    name: string;
    size?: number | string;
    type?: string;
    uri?: string;
  };
} & UploadInfo;

export type ImageUpload = {
  file: {
    height?: number;
    name?: string;
    uri?: string;
    width?: number;
  };
  previewUri?: string;
} & UploadInfo;
