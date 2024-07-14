import { FC } from "react";
import css from "./LastPageMessage.module.css";

interface LastPageMessageProps {
  page: number;
  totalPages: number;
}

const LastPageMessage: FC<LastPageMessageProps> = ({ page, totalPages }) => {
  return (
    <p className={css.errorNotFound}>
      Page {page} of {totalPages}
    </p>
  );
};

export default LastPageMessage;
