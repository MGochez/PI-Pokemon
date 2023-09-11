import usePaginate from '../../Hooks/usePaginate';
import styles from './Paginated.module.css';

const Paginated = () => {
  const {
    handlePrevious,
    handleNext,
    currentPage,
    totalPages,
  } = usePaginate();

  return (
    <div className={styles.paginatedContainer}>
      <button
        className={styles.button}
        disabled={currentPage === 1}
        onClick={handlePrevious}
      >
        Anterior
      </button>
      <div className={styles.pageInfo}>
        Pokepágina {currentPage} / {totalPages || 1}
      </div>
      <button
        className={styles.button}
        disabled={currentPage === totalPages}
        onClick={handleNext}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Paginated;