import styles from './PictureList.module.css';
import Article from 'components/Common/Article/Article';

function PictureList() {
  return (
    <div className={styles.layout}>
      <div className={styles.position}>
        <div>
          <button className={styles.writeButton}>글쓰기</button>
        </div>

        <p className={styles.line}></p>

        <div className={styles.floatRight}>
          <button className={styles.sortButton}>최신순</button>
          <button className={styles.sortButton}>추천순</button>
        </div>
      </div>

      <Article />
    </div>
  );
}

export default PictureList;
