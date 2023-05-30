import styles from './PictureDetail.module.css';
import Banner from 'components/Common/Banner/Banner';

function PictureDetail() {
  return (
    <>
      <Banner />

      <div className={styles.layout}>
        <div className={styles.position}>
          <p className={styles.title}>제목</p>

          <div className={styles.info}>
            <p className={styles.nickname}>김집사</p>
            <p>2023.05.20</p>
          </div>
        </div>

        <p className={styles.content}>내용테스트</p>
      </div>
    </>
  );
}

export default PictureDetail;
