import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";
import { FiSearch } from "react-icons/fi";
import ScrollUpBtn from "../ScrollUpBtn/ScrollUpBtn";
import { useRef, FormEvent, FC } from "react";

interface SearchBarProps {
  getQuery: (velue: string) => Promise<void>;
}

const SearchBar: FC<SearchBarProps> = ({ getQuery }) => {
  const headerRef = useRef<HTMLDivElement | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      elements: {
        searchInput: HTMLInputElement;
      };
    };

    const value = target.elements.searchInput.value.trim();

    if (!value) {
      toast.error("Please, fill the field");
      return;
    }

    getQuery(value);

    e.currentTarget.reset();
  };

  return (
    <header ref={headerRef} className={css.header}>
      <div>
        <Toaster />
      </div>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          name="searchInput"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos..."
          className={css.formInput}
        />
        <button type="submit" className={css.submitBtn}>
          Search
          <FiSearch />
        </button>
      </form>
      <ScrollUpBtn headerRef={headerRef} />
    </header>
  );
};

export default SearchBar;
