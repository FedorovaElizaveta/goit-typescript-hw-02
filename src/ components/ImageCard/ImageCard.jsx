import css from "./ImageCard.module.css";

const ImageCard = ({ photo, onPhotoClick }) => {
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
