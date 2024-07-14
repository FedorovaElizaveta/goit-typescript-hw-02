import css from "./LastPageMessage.module.css";

const LastPageMessage = ({ page, totalPages }) => {
  console.log("page", page);
  console.log("totalPages", totalPages);
  return (
    <p className={css.errorNotFound}>
      Page {page} of {totalPages}
    </p>
  );
};

export default LastPageMessage;
