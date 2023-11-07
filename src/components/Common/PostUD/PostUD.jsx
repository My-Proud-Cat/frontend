import styles from './PostUD.module.css';
import axios from 'axios';
import { axiosInstance } from 'custom/authToken';
import { useNavigate, useParams } from 'react-router-dom';

const PostUD = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const clickDelete = async () => {
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

  const clickUpdate = async () => {
    // await axiosInstance.put(`http://localhost:8080/picture/${id}`);
  };

  return (
    <div className={styles.layout}>
      <button
        className={styles.update}
        onClick={() => {
          clickUpdate();
        }}
      >
        수정
      </button>

      <button
        className={styles.delete}
        onClick={() => {
          clickDelete();
        }}
      >
        삭제
      </button>
    </div>
  );
};

export default PostUD;
