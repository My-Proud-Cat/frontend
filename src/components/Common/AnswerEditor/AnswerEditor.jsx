import styles from './AnswerEditor.module.css';
import DotButton from 'components/Common//DotButton/DotButton';
import { getPictureComment } from '@store/getPictureCommentData';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { useState } from 'react';
import axios from 'axios';

function AnswerEditor({ item }) {
  const { id } = useParams();

  const commentData = useRecoilState(getPictureComment(id));

  // console.log(commentData[0].commentDetails);

  const [update, setUpdate] = useState(false);

  const clickDotButton = async (e) => {
    if (e.target.name === 'update') {
      setUpdate((update) => !update);

      if (update === true) {
        await axios.put(`http://localhost:8080/${id}/comment`, {
          // comment: commentField.value,
        });
      }
    }

    if (e.target.name === 'delete') {
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
    }
  };

  const clickCancelButton = () => {
    setUpdate((update) => !update);
  };

  return (
    <>
      {update === true ? (
        <div className={styles.comment}>
          <div className={styles.info}>
            <p className={styles.name}>닉넴</p>

            <div className={styles.position}>
              <DotButton item={item} />
              <p className={styles.date}>2023.9.25</p>
            </div>
          </div>

          <p className={styles.answer}>{item.content}</p>
        </div>
      ) : (
        <div className={styles.comment}>
          <div className={styles.info}>
            <p className={styles.name}>{commentData.nickname}</p>

            <div className={styles.position}>
              <DotButton item={item} onClick={clickDotButton} />
              <p className={styles.date}>2023.9.25</p>
            </div>
          </div>

          <p className={styles.answer}>{item.content}</p>
        </div>
      )}
    </>
  );
}

export default AnswerEditor;
