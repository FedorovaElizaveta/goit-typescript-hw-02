import { MdKeyboardArrowUp } from "react-icons/md";
import css from "./ScrollUpBtn.module.css";
import { FC } from "react";

interface ScrollUpBtnProps {
  headerRef: React.RefObject<HTMLDivElement> | null;
}

const ScrollUpBtn: FC<ScrollUpBtnProps> = ({ headerRef }) => {
  const handleClick = () => {
    headerRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={css.scrollUpBtnWrapper}>
      <button onClick={handleClick} type="button" className={css.scrollUpBtn}>
        <MdKeyboardArrowUp size={35} />
      </button>
    </div>
  );
};

export default ScrollUpBtn;
