import css from "./ErrorNotFound.module.css";

const ErrorNotFound = () => {
  return (
    <p className={css.errorNotFound}>
      Sorry, there are no photos on your request...
    </p>
  );
};

export default ErrorNotFound;
