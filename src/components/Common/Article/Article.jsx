import { Link } from 'react-router-dom';
import styles from './Article.module.css';
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';

function Article({ item, name, page }) {
  const { title, view, heartCnt, id, nickname } = item;

  const [imageUrl, setImageUrl] = useState('');

  const imageRef = useRef(null);

  const onClickImage = () => imageRef.current.click();

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
  }, [name]);

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
  }, [page]);

  return (
    <div className={styles.layout}>
      <div>
        <img
          src={imageUrl}
          alt="인생샷"
          className={styles.img}
          onClick={() => onClickImage()}
          role="none"
        />

        <Link to={`/${id}`} className={styles.title} ref={imageRef}>
          {title}
        </Link>

        <div className={styles.position}>
          <p className={styles.nickname}>{nickname}</p>

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
