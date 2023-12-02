import styles from './PictureDetail.module.css';
import Banner from 'components/Common/Banner/Banner';
import Comment from 'components/Common/Comment/Comment';
import PostUD from 'components/Common/PostUD/PostUD';
import SubmitButton from 'components/Common/SubmitButton/SubmitButton';
import UpdatePage from 'components/Common/UpdatePage/UpdatePage';
import axios from 'axios';
import { ReactComponent as ThumbsBefore } from 'assets/thumbsBefore.svg';
import { ReactComponent as ThumbsAfter } from 'assets/thumbsAfter.svg';
import { useRecoilValueLoadable } from 'recoil';
import { getPicture } from '@store/getPictureData';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { axiosInstance } from 'custom/authToken';

function PictureDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [likeState, setLikeState] = useState('');
  const [updateMode, setUpdateMode] = useState(false);

  const pictureData = useRecoilValueLoadable(getPicture(id));
  let item = [pictureData].find(() => id);

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

  const { title, describe, img, user, view, nickname, createdAt } =
    item.contents;

  if (item === 'hasError') {
    return <div>Error : {console.log(item.error)}</div>;
  }

  if (item === 'loading') {
    return <div>로딩중입니다</div>;
  }

  const clickLike = async () => {
    axiosInstance
      .get(`http://localhost:8080/proudcat/${id}/heart`)
      .then((response) => {
        console.log(response);

        if (response.data === true) {
          setLikeState('click');
        } else {
          setLikeState('');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /* ---------------------------------- 수정/삭제 --------------------------------- */

  const onClickUpdateButton = async () => {
    setUpdateMode(true);
  };

  const onCliclCancelButton = () => {
    setUpdateMode(false);
  };

  const onSubmitUpdateButton = async () => {
    await axiosInstance
      .put(`http://localhost:8080/picture/${id}`, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then(() => {
        console.log('성공');
      });
  };

  const onClickDeleteButton = async () => {
    const ok = window.confirm('삭제 하시겠습니까?');

    if (ok) {
      await axiosInstance
        .delete(`http://localhost:8080/picture/${id}`)
        .then(() => {
          navigate('/');
          location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
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
              {/* <PostUD /> */}

              <div className={styles.layout2}>
                <div>
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
