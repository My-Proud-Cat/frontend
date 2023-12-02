import styles from './PostUD.module.css';
import { axiosInstance } from 'custom/authToken';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const PostUD = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [updateMode, setUpdateMode] = useState(false);

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

  const onClickUpdateButton = async () => {
    navigate('/update', { replace: true });
  };

  return (
    <>
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
    </>
  );
};

export default PostUD;
