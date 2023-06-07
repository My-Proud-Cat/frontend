import styles from './Sort.module.css';

function Sort({ ...restprops }) {
  return (
    <div>
      <button className={styles.sortButton} name="date" {...restprops}>
        최신순
      </button>
      <button className={styles.sortButton} name="like" {...restprops}>
        추천순
      </button>
    </div>
  );
}

export default Sort;
