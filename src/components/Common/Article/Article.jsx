import { Link } from 'react-router-dom';
import styles from './Article.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Article({ item }) {
  const { title, user, view, heartCnt, id } = item;

  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    axios
      .get(`http://localhost:8080/proudcat/api/image-file-path/${id}`, {
        responseType: 'arraybuffer',
      })
      .then((response) => {
        const url = URL.createObjectURL(
          new Blob([response.data], { type: 'image/png' }),
        );
        setImageUrl(url);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className={styles.layout}>
      <div>
        <img src={imageUrl} alt="" className={styles.img} />

        <Link to={`/${id}`} className={styles.title}>
          {title}
        </Link>

        <div className={styles.position}>
          <p className={styles.nickname}>{user?.nickname}</p>

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
