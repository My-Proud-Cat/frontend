import styles from './MyPage.module.css';
import { useNavigate } from 'react-router-dom';
import MyList from 'components/Common/MyList/MyList';

const MyPage = () => {
  const navigate = useNavigate();

  const onClickUpdateButton = () => {
    navigate('/update');
  };

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
        <button
          onClick={() => {
            onClickUpdateButton();
          }}
        >
          수정
        </button>

        <div className={styles.record}>
          <MyList title="게시글 내역" />
          <MyList title="댓글 내역" />
        </div>
      </div>
    </div>
  );
};

export default MyPage;
