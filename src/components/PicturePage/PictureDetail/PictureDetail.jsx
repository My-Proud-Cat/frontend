import styles from './PictureDetail.module.css';
import Banner from 'components/Common/Banner/Banner';
import Comment from 'components/Common/Comment/Comment';
import PostUD from 'components/Common/PostUD/PostUD';
import { ReactComponent as Heart } from 'assets/heart.svg';
import { useRecoilValueLoadable } from 'recoil';
import { getPicture } from '@store/getPictureData';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

function PictureDetail() {
  const { id } = useParams();

  const [likeState, setLikeState] = useState('');

  const pictureData = useRecoilValueLoadable(getPicture(id));
  let item = [pictureData].find(() => id);

  const { title, describe, img, user, view } = item.contents;

  if (item === 'hasError') {
    return <div>Error : {console.log(item.error)}</div>;
  }

  if (item === 'loading') {
    return <div>로딩중입니다</div>;
  }

  const clickLike = () => {
    if (likeState === '') {
      setLikeState('click');
    } else {
      setLikeState('');
    }
  };

  return (
    <>
      <Banner />

      <div className={styles.layout}>
        <div className={styles.position}>
          <p className={styles.title}>{title}</p>

          <div className={styles.info}>
            <p className={styles.nickname}>임시</p>
            <p className={styles.date}>2023.05.20</p>
            <PostUD />
          </div>
        </div>

        <p className={styles.content}>{describe}</p>

        <div className={styles.main}>
          <p className={styles.picture}></p>

          <button
            className={likeState === '' ? styles.like_no : styles.like}
            onClick={() => clickLike()}
          >
            <p>좋아요</p>
            <Heart />
          </button>
        </div>

        <Comment />
      </div>
    </>
  );
}

export default PictureDetail;
