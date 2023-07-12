import { string } from 'prop-types';
import styles from './WriteInput.module.css';
import axios from 'axios';
import SubmitButton from 'components/Common/SubmitButton/SubmitButton';
import { useRecoilState, useRecoilValue } from 'recoil';
import { titleState } from '@store/getPictureTitleData';
import { contentState } from '@store/getPictureContentData';
import { useParams, useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';

/* 텍스트 지우는 함수 */
function clearText() {
  document.getElementById('comment').value = '';
}

function WriteInput({ comment }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const titleField = useRecoilValue(titleState);
  const contentField = useRecoilValue(contentState);

  const [title, setTitle] = useRecoilState(titleState);
  const [content, setContent] = useRecoilState(contentState);
  const [commentField, setCommentField] = useState(null);

  /* ------------------------------------ 글 ----------------------------------- */

  async function onClickPostButton() {
    await axios
      .post('http://localhost:8080/picture/test', {
        title: titleField,
        describe: contentField,
        image: '',
        /* user: {
          nickname: '닉네임',
          user_id: '임시 아이디',
        }, */
      })
      .then(() => {
        navigate('/');
        location.reload();
      })
      .catch((err) => {
        // console.log(location.origin);
      });
  }

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  /* ----------------------------------- 댓글 ----------------------------------- */

  const onClickCommentButton = async () => {
    if (commentField === '') {
      window.alert('내용을 입력해주세요');
    } else {
      await axios
        .post(`http://localhost:8080/proudcat/${id}/comments`, {
          /* user: {
          nickname: '테스트',
          user_id: '임시 아이디',
        }, */
          content: commentField,
        })
        .then(() => {
          clearText();
          location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const onChangeComment = (e) => {
    setCommentField(e.target.value);
  };

  /* ----------------------------------- 파일 ----------------------------------- */

  const fileInputRef = useRef(null);

  const onClickFileInput = () => {
    fileInputRef.current.click(); // 버튼을 클릭하면 input을 참조해서 input이 클릭되게 함 (원래는 눌러도 아무 반응 x - input이 아니라 버튼이 눌린 걸로 판정되기때문)
  };

  const onChangeFile = () => {
    console.log();
  };

  return (
    <>
      {comment ? (
        <div>
          <textarea
            id="comment"
            className={styles.form}
            placeholder="댓글을 입력해주세요"
            onChange={onChangeComment}
            value={commentField}
          />

          <SubmitButton comment="true" onClick={onClickCommentButton} />
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
              <button
                htmlFor="file"
                onClick={() => {
                  onClickFileInput();
                }}
              >
                사진 추가하기
              </button>
              <input
                type="file"
                accept="image/jpg, image/jpeg, image/png"
                ref={fileInputRef}
                onChange={() => {
                  onChangeFile();
                }}
              />
            </div>
          </div>

          <SubmitButton onClick={onClickPostButton} />
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
