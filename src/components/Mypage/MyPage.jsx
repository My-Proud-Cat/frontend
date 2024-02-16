import Pagination from 'components/Common/Pagination/Pagination';
import styles from './MyPage.module.css';

const MyPage = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.layout2}>
        <p className={styles.title}>마이페이지</p>

        <div className={styles.info_layout1}>
          <div className={styles.info_layout2}>
            <img src="" alt="" className={styles.profile_img} />

            <div className={styles.info}>
              <p>닉네임 : </p>
              <p>고양이 이름 : </p>
              <p>고양이 종 : </p>
              <p>고양이 나이/성별 : </p>
            </div>
          </div>

          <div className={styles.badge}>
            <div className="">뱃지</div>

            <div className={styles.badge_img_layout}>
              <img src="" alt="" className={styles.badge_img} />
              <img src="" alt="" className={styles.badge_img} />
            </div>
          </div>
        </div>

        <div className={styles.record}>
          <div className={styles.post_layout}>
            <p className={styles.post_title}>게시글 내역</p>

            <div className={styles.post_group}>
              <p className={styles.post}>첫 번째 게시글</p>
              <p className={styles.date}>2024.02.14</p>
            </div>
            <div className={styles.post_group}>
              <p className={styles.post}>첫 번째 게시글</p>
              <p className={styles.date}>2024.02.14</p>
            </div>

            <div className={styles.pagination}>
              <Pagination />
            </div>
          </div>

          <div className={styles.post_layout}>
            <p className={styles.post_title}>댓글 내역</p>

            <div className={styles.post_group}>
              <p className={styles.post}>첫 번째 댓글</p>
              <p className={styles.date}>2024.02.14</p>
            </div>
            <div className={styles.post_group}>
              <p className={styles.post}>첫 번째 댓글</p>
              <p className={styles.date}>2024.02.14</p>
            </div>

            <div className={styles.pagination}>
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
