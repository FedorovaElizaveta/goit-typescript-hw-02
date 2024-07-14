export interface IPhotos {
  id: string;
  description: string;
  urls: {
    regular: string;
    small: string;
  };
}

export interface IPhotoData {
  total: number;
  total_pages: number;
  results: IPhotos[];
}
