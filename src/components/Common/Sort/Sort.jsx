import styles from './Sort.module.css';

function Sort() {
  return (
    <div>
      <button className={styles.sortButton}>최신순</button>
      <button className={styles.sortButton}>추천순</button>
    </div>
  );
}

export default Sort;
