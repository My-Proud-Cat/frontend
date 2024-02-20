import styles from './ThemeList.module.css';
import { useNavigate } from 'react-router-dom';
import Banner from 'components/Common/Banner/Banner';
import Article from 'components/Common/Article/Article';
import Sort from 'components/Common/Sort/Sort';
import Pagination from 'components/Common/Pagination/Pagination';

const ThemeList = () => {
  const navigate = useNavigate();
  const storage = localStorage.getItem('accessToken');

  const onCLickWriteButton = () => {
    if (storage) {
      navigate('/write');
    } else {
      alert('로그인 후 이용 가능합니다');
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
                onCLickWriteButton();
              }}
            >
              글쓰기
            </button>
          </div>

          <p className={styles.line}></p>

          <Sort /* onClick={() => onClickSort(event)} */ />
        </div>

        <div className={styles.post}>{/* <Article /> */}</div>

        <Pagination />
      </div>
    </>
  );
};

export default ThemeList;
