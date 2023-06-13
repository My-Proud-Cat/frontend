import { Link } from 'react-router-dom';
import styles from './Article.module.css';

function Article({ item }) {
  const { img, title, describe, users, created_at, view, heartCnt, id } = item;

  return (
    <div className={styles.layout}>
      <div>
        <p className={styles.img}></p>

        <Link to={`/${id}`} className={styles.title}>
          {title}
        </Link>
        <p className={styles.describe}>{describe}</p>

        <div className={styles.position}>
          {/* <p className={styles.nickname}>{users.nickname}</p> */}

          <div className={styles.numbers}>
            <p className={styles.view}>조회수 {view}</p>
            <p className={styles.like}>추천순 {heartCnt}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;
