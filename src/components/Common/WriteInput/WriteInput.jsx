import { string } from 'prop-types';
import styles from './WriteInput.module.css';
import axios from 'axios';
import SubmitButton from 'components/Common/SubmitButton/SubmitButton';
import { useRecoilState } from 'recoil';
import { titleState } from '@store/getPictureTitleData';
import { contentState } from '@store/getPictureContentData';
import { useParams } from 'react-router-dom';

/* 텍스트 지우는 함수 */
function clearText() {
  document.getElementById('comment').value = '';
}

function WriteInput({ comment }) {
  const { id } = useParams();

  const [title, setTitle] = useRecoilState(titleState);
  const [content, setContent] = useRecoilState(contentState);

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const commentField = document.getElementById('comment');

  async function onClickCommentButton() {
    await axios
      .post(`http://localhost:8080/${id}/comments`, {
        user: {
          nickname: '테스트',
          user_id: '임시 아이디',
        },
        comment: commentField.value,
        created_at: new Date().getTime(),
      })
      .then(() => {
        clearText();
        location.reload();
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
              onClickCommentButton();
            }}
          />
        </div>
      ) : (
        <div>
          <p>글 작성</p>

          <div className={styles.layout}>
            <div className={styles.input}>
              <input
                id="title"
                className={styles.title}
                placeholder="제목을 입력해주세요"
                onChange={onChangeTitle}
                value={title}
              />
              <textarea
                id="content"
                className={styles.content}
                placeholder="내용을 입력해주세요"
                onChange={onChangeContent}
                value={content}
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
