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
import { IPhotoData, IPhotos } from "./types";

function App() {
  const [photos, setPhotos] = useState<IPhotos[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [errorNotFound, setErrorNotFound] = useState<boolean>(false);
  const [selectedPhoto, setSelectedPhoto] = useState<IPhotos | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [photoData, setPhotoData] = useState<IPhotoData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(false);
        setErrorNotFound(false);
        setIsLoading(true);
        const data: IPhotoData | null = await getPhotosApi(query, page);
        setPhotos((prev) => [...prev, ...(data?.results ?? [])]);
        {
          data?.total === 0 && setErrorNotFound(true);
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

  const handleSubmit = async (value: string): Promise<void> => {
    setQuery(value);
    setPhotos([]);
    setPage(1);
  };

  const handleLoadMore = async (): Promise<void> => {
    setPage(page + 1);
  };

  const handlePhotoClick = (photo: IPhotos): void => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setSelectedPhoto(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <SearchBar getQuery={handleSubmit} />
      {error && <ErrorMessage />}
      {errorNotFound && <ErrorNotFound />}
      {photos.length > 0 && (
        <ImageGallery photos={photos} onPhotoClick={handlePhotoClick} />
      )}
      {isLoading && <Loader />}
      {page === photoData?.total_pages && (
        <LastPageMessage page={page} totalPages={photoData?.total_pages} />
      )}
      {photos.length > 0 && page !== photoData?.total_pages && (
        <LoadMoreBtn handleLoadMore={handleLoadMore} />
      )}
      {isModalOpen && selectedPhoto && (
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
