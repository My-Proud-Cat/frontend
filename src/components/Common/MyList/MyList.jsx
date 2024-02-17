import styles from './MyList.module.css';
import Pagination from 'components/Common/Pagination/Pagination';
import { Link } from 'react-router-dom';

const MyList = ({ title }) => {
  return (
    <div>
      <div className={styles.layout}>
        <p className={styles.title}>{title}</p>

        <div className={styles.group}>
          <Link className={styles.post}>첫 번째</Link>
          <p className={styles.date}>2024.02.14</p>
        </div>
        <div className={styles.group}>
          <Link className={styles.post}>두 번째</Link>
          <p className={styles.date}>2024.02.14</p>
        </div>

        <div className={styles.pagination}>
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default MyList;
