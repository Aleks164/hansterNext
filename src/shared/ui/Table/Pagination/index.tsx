import styles from "./styles.module.css";
import ChangePageButton from "./ChangePageButton";

interface Props {
  maxPage: number;
  currentPage: number;
  children?: React.ReactNode;
}

function Pagination({ maxPage, currentPage, children }: Props) {
  return (
    <div className={styles.pagination_container}>
      <ChangePageButton
        nextPage={currentPage - 1}
        directionIcon={"<"}
        isDisabled={currentPage <= 1}
      />
      <span>{currentPage}</span>
      <ChangePageButton
        nextPage={currentPage + 1}
        directionIcon={">"}
        isDisabled={currentPage >= maxPage}
      />
      {children}
    </div>
  );
}

export default Pagination;
