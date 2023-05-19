import styles from './PictureList.module.css';
import Article from 'components/Common/Article/Article';
import Pagination from 'components/Common/Pagination/Pagination';
import Sort from 'components/Common/Sort/Sort';

function PictureList() {
  return (
    <div className={styles.layout}>
      <div className={styles.position}>
        <div>
          <button className={styles.writeButton}>글쓰기</button>
        </div>

        <p className={styles.line}></p>

        <Sort />
      </div>

      <Article />
      <Pagination />
    </div>
  );
}

export default PictureList;
