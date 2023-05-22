import { useState } from 'react';
import styles from './Pagination.module.css';

function Pagination() {
  const [page, setPage] = useState(1);

  const handlePageChange = (page) => {
    setPage(page);
  };

  return <div className={styles.layout}>페이지네이션</div>;
}

export default Pagination;
