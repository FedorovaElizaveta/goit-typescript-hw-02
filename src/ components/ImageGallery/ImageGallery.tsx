import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import { IPhotos } from "../../types";
import { FC } from "react";

interface ImageGalleryProps {
  photos: IPhotos[];
  onPhotoClick: (photo: IPhotos) => void;
}

const ImageGallery: FC<ImageGalleryProps> = ({ photos, onPhotoClick }) => {
  return (
    <ul className={css.gallery}>
      {photos.map((photo) => (
        <li key={photo.id} className={css.galleryItem}>
          <ImageCard photo={photo} onPhotoClick={onPhotoClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
