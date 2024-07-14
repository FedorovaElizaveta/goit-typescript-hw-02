import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ photos, onPhotoClick }) => {
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
