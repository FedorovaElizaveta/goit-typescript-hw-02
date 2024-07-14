import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ handleLoadMore }) => {
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
