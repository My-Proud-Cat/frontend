import styles from './PictureDetail.module.css';
import Banner from 'components/Common/Banner/Banner';
import Comment from 'components/Common/Comment/Comment';
import { useRecoilValueLoadable } from 'recoil';
import { getPicture } from '@store/getPictureData';
import { useNavigate, useParams } from 'react-router-dom';

function PictureDetail() {
  const { id } = useParams();

  const pictureData = useRecoilValueLoadable(getPicture(id));
  let item = [pictureData].find(() => id);

  const { title, content, img, user, like, view } = item.contents;

  console.log(user?.nickname);

  if (item === 'hasError') {
    return <div>Error : {console.log(item.error)}</div>;
  }

  if (item === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Banner />

      <div className={styles.layout}>
        <div className={styles.position}>
          <p className={styles.title}>{title}</p>

          <div className={styles.info}>
            <p className={styles.nickname}>{user?.nickname}</p>
            <p>2023.05.20</p>
          </div>
        </div>
        <p className={styles.content}>{content}</p>
        <div className={styles.main}>
          <p className={styles.picture}></p>

          <button className={styles.like}>좋아요 {like}</button>
        </div>

        <Comment />
      </div>
    </>
  );
}

export default PictureDetail;
