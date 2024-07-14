import { FC } from "react";
import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  handleLoadMore: () => Promise<void>;
}

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ handleLoadMore }) => {
  return (
    <div className={css.loadMoreBtnWrapper}>
      <button
        onClick={handleLoadMore}
        type="button"
        className={css.loadMoreBth}
      >
        Load more...
      </button>
    </div>
  );
};

export default LoadMoreBtn;
