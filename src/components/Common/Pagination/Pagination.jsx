import styles from './Pagination.module.css';

function Pagination({ postsPerPage, totalPosts, paginate, currentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts, postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.layout}>
      <button
        className={styles.paginationButton}
        aria-label="이전 페이지"
        onClick={() => {
          paginate(currentPage - 1);
        }}
        disabled={currentPage === 1}
      >
        이전
      </button>

      <ul className={styles.paginate}>
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              onClick={() => {
                paginate(number);
              }}
              className={styles.pageNumber}
              aria-current={currentPage === number ? 'currentPage' : null}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>

      <button
        className={styles.paginationButton}
        aria-label="다음 페이지"
        onClick={() => {
          paginate(currentPage + 1);
        }}
        disabled={currentPage === pageNumbers.length}
      >
        다음
      </button>
    </div>
  );
}

export default Pagination;
