import { Link } from 'react-router-dom';
import styles from './Article.module.css';

function Article() {
  return (
    <div className={styles.layout}>
      <div>
        <p className={styles.thumbnail}></p>

        <Link className={styles.title}>
          제목제목제목제목제목제목제목제목제목
        </Link>
        <p className={styles.content}>내용내용내용내용내용내용내용내용</p>

        <div className={styles.position}>
          <p className={styles.writer}>작성자</p>

          <div className={styles.numbers}>
            <p className={styles.hits}>조회수 13</p>
            <p className={styles.like}>추천순 2</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;
