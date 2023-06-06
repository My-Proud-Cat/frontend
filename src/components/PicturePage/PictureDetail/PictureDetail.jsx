import styles from './PictureDetail.module.css';
import Banner from 'components/Common/Banner/Banner';
import Comment from 'components/Common/Comment/Comment';
import { useRecoilValue } from 'recoil';
import { getPicture } from '@store/getPictureData';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function PictureDetail() {
  const { id } = useParams();

  const pictureData = useRecoilValue(getPicture);
  let item = pictureData.find((item) => item.id === id);

  // const { title, content, img, user, like, view } = item;

  console.log(item);

  return (
    <>
      <Banner />

      <div className={styles.layout}>
        <div className={styles.position}>
          <p className={styles.title}></p>

          <div className={styles.info}>
            <p className={styles.nickname}></p>
            <p>2023.05.20</p>
          </div>
        </div>
        <p className={styles.content}></p>
        <div className={styles.main}>
          <p className={styles.picture}></p>

          <button className={styles.like}>좋아요</button>
        </div>

        <Comment />
      </div>
    </>
  );
}

export default PictureDetail;
