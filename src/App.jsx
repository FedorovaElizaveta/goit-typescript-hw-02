import ImageGallery from "./ components/ImageGallery/ImageGallery";
import { useEffect, useState } from "react";
import ErrorMessage from "./ components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./ components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./ components/Loader/Loader";
import SearchBar from "./ components/SearchBar/SearchBar";
import getPhotosApi from "./api/photos-api";
import ImageModal from "./ components/ImageModal/ImageModal";
import ErrorNotFound from "./ components/ErrorNotFound/ErrorNotFound";
import LastPageMessage from "./ components/LastPageMessage/LastPageMessage";

function App() {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorNotFound, setErrorNotFound] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [photoData, setPhotoData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(false);
        setErrorNotFound(false);
        setIsLoading(true);
        const data = await getPhotosApi(query, page);
        setPhotos((prev) => [...prev, ...data.results]);
        {
          data.total === 0 && setErrorNotFound(true);
        }
        setPhotoData(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    query && fetchData();
  }, [query, page]);

  const handleSubmit = async (value) => {
    setQuery(value);
    setPhotos([]);
    setPage(1);
  };

  const handleLoadMore = async () => {
    setPage(page + 1);
  };

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setIsModalOpen(false);
  };

  console.log("total_pages", photoData.total_pages);

  return (
    <>
      <SearchBar getQuery={handleSubmit} />
      {error && <ErrorMessage />}
      {errorNotFound && <ErrorNotFound />}
      {photos.length > 0 && (
        <ImageGallery photos={photos} onPhotoClick={handlePhotoClick} />
      )}
      {isLoading && <Loader />}
      {page === photoData.total_pages && (
        <LastPageMessage page={page} totalPages={photoData.total_pages} />
      )}
      {photos.length > 0 && page !== photoData.total_pages && (
        <LoadMoreBtn handleLoadMore={handleLoadMore} />
      )}
      {isModalOpen && (
        <ImageModal
          photo={selectedPhoto}
          closeModal={closeModal}
          isModalOpen={isModalOpen}
        />
      )}
    </>
  );
}

export default App;
