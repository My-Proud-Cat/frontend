import { string } from 'prop-types';
import styles from './WriteInput.module.css';
import axios from 'axios';
import SubmitButton from 'components/Common/SubmitButton/SubmitButton';

/* 텍스트 지우는 함수 */
function clearText() {
  document.getElementById('comment').value = '';
}

function WriteInput({ comment }) {
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
      {comment ? (
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
      ) : (
        <div>
          <p>글 작성</p>

          <div className={styles.layout}>
            <div className={styles.input}>
              <input
                className={styles.title}
                placeholder="제목을 입력해주세요"
              />
              <textarea
                className={styles.content}
                placeholder="내용을 입력해주세요"
              />
            </div>

            <div className={styles.fileUpload}>
              <label htmlFor="file">사진 추가하기</label>
              <input id="file" type="file" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default WriteInput;

WriteInput.defaultProps = {
  type: 'text',
  placeholder: string,
};
