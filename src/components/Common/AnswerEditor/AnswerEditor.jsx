import styles from './AnswerEditor.module.css';
import { getPictureComment } from '@store/getPictureCommentData';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { axiosInstance } from 'custom/authToken';

function AnswerEditor({ item }) {
  const { id } = useParams();

  const commentData = useRecoilState(getPictureComment(id));

  const clickDeleteButton = async (e) => {
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

  return (
    <>
      <div className={styles.comment}>
        <div className={styles.info}>
          <p className={styles.name}>{item.commentWriter}</p>

          <div className={styles.position}>
            <p className={styles.date}>{item.createdAt}</p>
            <button
              className={styles.delete}
              onClick={() => {
                clickDeleteButton();
              }}
            >
              삭제
            </button>
          </div>
        </div>

        <p className={styles.answer}>{item.content}</p>
      </div>
    </>
  );
}

export default AnswerEditor;
