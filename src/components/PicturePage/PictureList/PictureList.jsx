import styles from './PictureList.module.css';
import Article from 'components/Common/Article/Article';
import Pagination from 'components/Common/Pagination/Pagination';
import Sort from 'components/Common/Sort/Sort';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { getPictureList } from '@store/getPictureListData';

function PictureList() {
  const pictureListData = useRecoilValue(getPictureList);

  const [posts, setPosts] = useState([...pictureListData]);

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
