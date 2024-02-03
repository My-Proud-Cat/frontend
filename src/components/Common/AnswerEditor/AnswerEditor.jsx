import styles from './AnswerEditor.module.css';
import { getPictureComment } from '@store/getPictureCommentData';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { axiosInstance } from 'custom/authToken';
import { useState, useEffect } from 'react';

function AnswerEditor({ item }) {
  const { id } = useParams();

  const commentData = useRecoilState(getPictureComment(id));

  const { commentWriter, createdAt, content, email } = item;

  const storage = localStorage.getItem('accessToken');
  const [auth, setAuth] = useState(false);

  const clickDeleteButton = async () => {
    const ok = window.confirm('삭제 하시겠습니까?');

    if (ok) {
      await axiosInstance
        .delete(`http://localhost:8080/proudcat/${id}/comment/${item.id}`)
        .then(() => {
          location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    if (storage) {
      /* axiosInstance
        .get('http://localhost:8080/auth/user-detail')
        .then((response) => {
          if (response.data.email === email) {
            setAuth(true);
          }
        }); */
    } else {
      setAuth(false);
    }
  }, []);

  return (
    <>
      <div className={styles.comment}>
        <div className={styles.info}>
          <p className={styles.name}>{commentWriter}</p>

          <div className={styles.position}>
            <p className={styles.date}>{createdAt}</p>
            {auth === true ? (
              <button
                className={styles.delete}
                onClick={() => {
                  clickDeleteButton();
                }}
              >
                삭제
              </button>
            ) : (
              <></>
            )}
          </div>
        </div>

        <p className={styles.answer}>{content}</p>
      </div>
    </>
  );
}

export default AnswerEditor;
