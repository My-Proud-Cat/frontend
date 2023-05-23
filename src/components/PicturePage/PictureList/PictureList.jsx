import styles from './PictureList.module.css';
import Article from 'components/Common/Article/Article';
import Pagination from 'components/Common/Pagination/Pagination';
import Sort from 'components/Common/Sort/Sort';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { getPictureList } from '@store/getPictureListData';
import { ReactComponent as Banner } from 'assets/banner.svg';

function PictureList() {
  const pictureListData = useRecoilValue(getPictureList);

  const [posts, setPosts] = useState([...pictureListData]);
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const [postsPerPage, setPostsPerPage] = useState(3); // 한 페이지에 보일 게시글 수

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;

  const currentPosts = (posts) => {
    let currentPosts = 0;
    currentPosts = posts.slice(indexOfFirst, indexOfLast);

    return currentPosts;
  };

  return (
    <>
      <Banner className={styles.banner} />

      <div className={styles.layout}>
        <div className={styles.position}>
          <div>
            <button className={styles.writeButton}>글쓰기</button>
          </div>

          <p className={styles.line}></p>

          <Sort />
        </div>

        <div className={styles.post}>
          {currentPosts(posts).map((item) => {
            return <Article key={item?.id} item={item} />;
          })}
        </div>

        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </>
  );
}

export default PictureList;
