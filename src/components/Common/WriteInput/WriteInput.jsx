import { string } from 'prop-types';
import styles from './WriteInput.module.css';
import SubmitButton from 'components/Common/SubmitButton/SubmitButton';
import { useEffect, useState } from 'react';
import { axiosInstance } from 'custom/authToken';
import useInput from 'custom/useInput';

function WriteInput({ comment }) {
  const {
    id,
    clearText,
    onClickFileInput,
    onChangeFile,
    onClickPostButton,
    onChangeTitle,
    onChangeContent,
    title,
    content,
    imgPreview,
    fileInputRef,
  } = useInput();

  /* ----------------------------------- 댓글 ----------------------------------- */

  const [commentField, setCommentField] = useState(null);

  const storage = localStorage.getItem('refreshToken');
  const [user, setUser] = useState(false);

  useEffect(() => {
    if (storage) {
      setUser(true);
    }
  }, []);

  const onClickCommentButton = async () => {
    if (commentField === '') {
      window.alert('내용을 입력해주세요');
    } else {
      await axiosInstance
        .post(`http://localhost:8080/proudcat/${id}/comments`, {
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

  return (
    <>
      {comment ? (
        <div>
          {user === true ? (
            <div className="">
              <textarea
                id="comment"
                className={styles.form}
                placeholder="댓글을 입력해주세요"
                onChange={onChangeComment}
                value={commentField || ''}
              />

              <SubmitButton
                category="등록"
                comment="true"
                onClick={onClickCommentButton}
              />
            </div>
          ) : (
            <div className="">
              <textarea
                id="comment"
                className={styles.form}
                placeholder="로그인 후 이용 가능합니다"
                onChange={onChangeComment}
                value={commentField || ''}
                disabled
              />

              <SubmitButton
                category="등록"
                comment="true"
                onClick={onClickCommentButton}
                disabled
              />
            </div>
          )}
        </div>
      ) : (
        <div>
          <p>글 작성</p>

          <form onSubmit={onClickPostButton} encType="multipart/form-data">
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
                  value={content || ''}
                />
              </div>

              <div className={styles.fileUpload}>
                <img src={imgPreview} alt="미리보기" />
                <button onClick={onClickFileInput} type="button">
                  사진 추가하기
                </button>
                <input
                  id="file"
                  type="file"
                  accept="image/jpg, image/jpeg, image/png"
                  ref={fileInputRef}
                  onChange={onChangeFile}
                />
              </div>
            </div>
            <SubmitButton category="등록" />
          </form>
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
