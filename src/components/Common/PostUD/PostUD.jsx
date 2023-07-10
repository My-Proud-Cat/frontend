import styles from './PostUD.module.css';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const PostUD = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const clickDelete = async () => {
    const ok = window.confirm('삭제 하시겠습니까?');

    if (ok) {
      await axios
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
    <div className={styles.layout}>
      <button className={styles.update}>수정</button>
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
