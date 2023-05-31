import styles from './Comment.module.css';
import SubmitButton from 'components/Common/SubmitButton/SubmitButton';
import AnswerEditor from 'components/Common/AnswerEditor/AnswerEditor';
import axios from 'axios';

/* 텍스트 지우는 함수 */
function clearText() {
  document.getElementById('comment').value = '';
}

function Comment() {
  const comment = document.getElementById('comment');

  async function onClickButton() {
    await axios
      .post('http://localhost:3001/comment', {
        user: {
          nickname: '임시 닉네임',
          user_id: '임시 아이디',
        },
        comment: comment.value,
        created_at: new Date().getTime(),
      })
      .then((res) => {
        console.log(res);
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

      <AnswerEditor />
    </>
  );
}

export default Comment;
