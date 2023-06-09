import styles from './PictureList.module.css';
import Article from 'components/Common/Article/Article';
import Pagination from 'components/Common/Pagination/Pagination';
import Sort from 'components/Common/Sort/Sort';
import Banner from 'components/Common/Banner/Banner';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { getPictureList } from '@store/getPictureData';
import { useNavigate } from 'react-router-dom';

function PictureList() {
  const pictureData = useRecoilValue(getPictureList);

  const [posts, setPosts] = useState([...pictureData]);

  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const [postsPerPage, setPostsPerPage] = useState(4); // 한 페이지에 보일 게시글 수

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;

  const currentPosts = (posts) => {
    let currentPosts = 0;
    currentPosts = posts.slice(indexOfFirst, indexOfLast);

    return currentPosts;
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (!pictureData) return;
    setPosts(pictureData);
  }, [pictureData]);

  const onClickSort = (e) => {
    if (e.target.name === 'date') {
      setPosts(
        [...pictureData].sort(function (a, b) {
          return new Date(b.created_at) - new Date(a.created_at);
        }),
      );
    }

    if (e.target.name === 'like') {
      setPosts(
        [...pictureData].sort(function (a, b) {
          return b.like - a.like;
        }),
      );
    }
  };

  return (
    <>
      <Banner />

      <div className={styles.layout}>
        <div className={styles.position}>
          <div>
            <button
              className={styles.writeButton}
              onClick={() => {
                navigate('/write');
              }}
            >
              글쓰기
            </button>
          </div>

          <p className={styles.line}></p>

          <Sort onClick={() => onClickSort(event)} />
        </div>

        <div className={styles.post}>
          {currentPosts(posts).map((item, index) => {
            return <Article key={index} item={item} />;
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
