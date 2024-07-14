import { FC } from "react";
import { IPhotos } from "../../types";
import css from "./ImageCard.module.css";

interface ImageCardProps {
  photo: IPhotos;
  onPhotoClick: (photo: IPhotos) => void;
}

const ImageCard: FC<ImageCardProps> = ({ photo, onPhotoClick }) => {
  return (
    <div className={css.galleryImgWrapper} onClick={() => onPhotoClick(photo)}>
      <img
        src={photo.urls.small}
        alt={photo.description}
        className={css.galleryImg}
      />
    </div>
  );
};

export default ImageCard;
