import styles from './PictureList.module.css';
import Article from 'components/Common/Article/Article';
import Pagination from 'components/Common/Pagination/Pagination';
import Sort from 'components/Common/Sort/Sort';
import axios from 'axios';
import { useEffect, useState } from 'react';

function PictureList() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  const getDatas = async () => {
    try {
      setError(null);

      const response = await axios.get('http://localhost:3001/picture');
      setPosts(response.data);
    } catch (e) {
      setError(e);
    }
  };

  useEffect(() => {
    getDatas();
  }, []);

  return (
    <>
      <div className={styles.layout}>
        <div className={styles.position}>
          <div>
            <button className={styles.writeButton}>글쓰기</button>
          </div>

          <p className={styles.line}></p>

          <Sort />
        </div>

        <div className={styles.post}>
          {posts.map((item) => {
            return <Article key={item?.id} item={item} />;
          })}
        </div>

        <Pagination />
      </div>
    </>
  );
}

export default PictureList;
