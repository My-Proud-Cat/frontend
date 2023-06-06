import { Link } from 'react-router-dom';
import styles from './Article.module.css';

function Article({ item }) {
  const { img, title, content, user, created_at, view, like, id } = item;

  return (
    <div className={styles.layout}>
      <div>
        <p className={styles.img}></p>

        <Link to={`/${id}`} className={styles.title}>
          {title}
        </Link>
        <p className={styles.describe}>{content}</p>

        <div className={styles.position}>
          <p className={styles.nickname}>{user.nickname}</p>

          <div className={styles.numbers}>
            <p className={styles.view}>조회수 {view}</p>
            <p className={styles.like}>추천순 {like}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;
