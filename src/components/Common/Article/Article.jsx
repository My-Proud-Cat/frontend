import { Link } from 'react-router-dom';
import styles from './Article.module.css';

function Article({ item }) {
  const { title, content, user, createdAt, hits, like } = item;

  return (
    <div className={styles.layout}>
      <div>
        <p className={styles.thumbnail}></p>

        <Link className={styles.title}>{title}</Link>
        <p className={styles.content}>{content}</p>

        <div className={styles.position}>
          <p className={styles.writer}>{user.nickName}</p>

          <div className={styles.numbers}>
            <p className={styles.hits}>조회수 {hits}</p>
            <p className={styles.like}>추천순 {like}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;
