import styles from './Comment.module.css';
import SubmitButton from 'components/Common/SubmitButton/SubmitButton';
import AnswerEditor from 'components/Common/AnswerEditor/AnswerEditor';
import axios from 'axios';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { getPictureComment } from '@store/getPictureCommentData';

/* 텍스트 지우는 함수 */
function clearText() {
  document.getElementById('comment').value = '';
}

function Comment() {
  const pictureCommentData = useRecoilValue(getPictureComment);
  const [comment, setComment] = useState([...pictureCommentData]);

  const commentField = document.getElementById('comment');

  async function onClickButton() {
    await axios
      .post('http://localhost:3001/comment', {
        user: {
          nickname: '임시 닉네임',
          user_id: '임시 아이디',
        },
        comment: commentField.value,
        created_at: new Date().getTime(),
      })
      .then((res) => {
        console.log(res);
        clearText();
        window.location.reload();
      });
  }

  return (
    <>
      <div className={styles.layout}>
        <p className={styles.label}>댓글</p>

        <div>
          <textarea
            id="comment"
            type="text"
            placeholder="댓글을 입력해주세요"
            className={styles.form}
          />

          <SubmitButton
            comment="true"
            onClick={() => {
              onClickButton();
            }}
          />
        </div>
      </div>

      {comment.map((item) => {
        return <AnswerEditor key={item.id} item={item} />;
      })}
    </>
  );
}

export default Comment;
