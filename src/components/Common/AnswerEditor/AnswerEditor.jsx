import styles from './AnswerEditor.module.css';
import { getPictureComment } from '@store/getPictureCommentData';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import axios from 'axios';

function AnswerEditor({ item }) {
  const { id } = useParams();

  const commentData = useRecoilState(getPictureComment(id));

  // console.log(commentData[0].commentDetails);

  const clickDotButton = async (e) => {
    const ok = window.confirm('삭제 하시겠습니까?');

    if (ok) {
      await axios
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
          <p className={styles.name}>{commentData.nickname}</p>

          <div className={styles.position}>
            <p className={styles.date}>2023.9.25</p>
            <button
              className={styles.delete}
              onClick={() => {
                clickDotButton();
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
