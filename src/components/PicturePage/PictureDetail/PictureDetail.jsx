import styles from './PictureDetail.module.css';
import Banner from 'components/Common/Banner/Banner';
import Comment from 'components/Common/Comment/Comment';
import SubmitButton from 'components/Common/SubmitButton/SubmitButton';
import UpdatePage from 'components/Common/UpdatePage/UpdatePage';
import { ReactComponent as ThumbsBefore } from 'assets/thumbsBefore.svg';
import { ReactComponent as ThumbsAfter } from 'assets/thumbsAfter.svg';
import { useRecoilValueLoadable } from 'recoil';
import { getPicture } from '@store/getPictureData';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { axiosInstance } from 'custom/authToken';
import useInput from 'custom/useInput';
import axios from 'axios';

function PictureDetail() {
  const {
    updateMode,
    onCliclCancelButton,
    onClickUpdateButton,
    onClickDeleteButton,
    onSubmitUpdateButton,
  } = useInput();

  const { id } = useParams();

  const [likeState, setLikeState] = useState('');
  const [auth, setAuth] = useState(false);

  const storage = localStorage.getItem('accessToken');

  const pictureData = useRecoilValueLoadable(getPicture(id));
  let item = [pictureData].find(() => id);

  const { title, describe, nickname, createdAt, email } = item.contents;

  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    axios
      .get(`http://localhost:8080/proudcat/api/image-file-path/${id}`, {
        responseType: 'arraybuffer',
      })
      .then((response) => {
        const url = URL.createObjectURL(
          new Blob([response.data], { type: 'image/png' }),
        );
        setImageUrl(url);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (storage) {
      axiosInstance
        .get('http://localhost:8080/auth/user-detail')
        .then((response) => {
          if (response.data.email === email) {
            setAuth(true);
          }
        });
    } else {
      setAuth(false);
    }
  }, []);

  if (item === 'hasError') {
    return <div>Error : {console.log(item.error)}</div>;
  }

  if (item === 'loading') {
    return <div>로딩중입니다</div>;
  }

  const clickLike = async () => {
    if (storage) {
      axiosInstance
        .get(`http://localhost:8080/proudcat/${id}/heart`)
        .then((response) => {
          if (response.data === true) {
            setLikeState('click');
          } else {
            setLikeState('');
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert('로그인 후 이용 가능합니다');
    }
  };

  return (
    <>
      <Banner />

      {updateMode === true ? (
        <div className={styles.layout}>
          <UpdatePage />

          <div className={styles.button}>
            <SubmitButton category="수정" onClick={onSubmitUpdateButton} />
            <SubmitButton
              category="취소"
              onClick={onCliclCancelButton}
              type="button"
            />
          </div>
        </div>
      ) : (
        <div className={styles.layout}>
          <div className={styles.position}>
            <p className={styles.title}>{title}</p>

            <div className={styles.info}>
              <p className={styles.nickname}>{nickname}</p>
              <p className={styles.date}>{createdAt}</p>

              <div className={styles.layout2}>
                {auth === true ? (
                  <div className={styles.dot}>
                    <button
                      className={styles.update}
                      onClick={() => {
                        onClickUpdateButton();
                      }}
                    >
                      수정
                    </button>

                    <button
                      className={styles.delete}
                      onClick={() => {
                        onClickDeleteButton();
                      }}
                    >
                      삭제
                    </button>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>

          <p className={styles.content}>{describe}</p>

          <div className={styles.main}>
            <img src={imageUrl} alt="이미지" className={styles.picture} />

            <button
              className={likeState === '' ? styles.like_no : styles.like}
              onClick={() => clickLike()}
            >
              <ThumbsBefore
                className={likeState === '' ? styles.visible : styles.invisible}
              >
                추천
              </ThumbsBefore>
              <ThumbsAfter
                className={likeState === '' ? styles.invisible : styles.visible}
              />
            </button>
          </div>

          <Comment />
        </div>
      )}
    </>
  );
}

export default PictureDetail;
