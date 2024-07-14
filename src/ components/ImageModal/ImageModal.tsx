import { FC } from "react";
import { IPhotos } from "../../types";
import css from "./ImageModal.module.css";
import Modal from "react-modal";

interface ImageModalProps {
  photo: IPhotos;
  closeModal: () => void;
  isModalOpen: boolean;
}

Modal.setAppElement("#root");

const ImageModal: FC<ImageModalProps> = ({
  photo,
  closeModal,
  isModalOpen,
}) => {
  const customStyles: Modal.Styles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "1100px",
      height: "750px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "10px",
      backgroundColor: "#343434",
      borderColor: "#343434",
      borderRadius: "8px",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.75)",
    },
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Selected Photo"
    >
      <img
        src={photo.urls.regular}
        alt={photo.description}
        className={css.modalImage}
      />
    </Modal>
  );
};

export default ImageModal;
