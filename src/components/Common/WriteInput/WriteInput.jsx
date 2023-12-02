import { string } from 'prop-types';
import styles from './WriteInput.module.css';
import axios from 'axios';
import SubmitButton from 'components/Common/SubmitButton/SubmitButton';
import { useRecoilState, useRecoilValue } from 'recoil';
import { titleState } from '@store/getPictureTitleData';
import { contentState } from '@store/getPictureContentData';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { axiosInstance } from 'custom/authToken';

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

  /* ----------------------------------- 파일 ----------------------------------- */

  const fileInputRef = useRef(null);

  const [image, setImage] = useState();
  const [imgPreview, setImgPreview] = useState('');

  const onClickFileInput = () => {
    fileInputRef.current.click(); // 버튼을 클릭하면 input을 참조해서 input이 클릭되게 함 (원래는 눌러도 아무 반응 x - input이 아니라 버튼이 눌린 걸로 판정되기때문)
  };

  const onChangeFile = async (e) => {
    if (e.target.files[0] !== null) {
      setImage(e.target.files[0]);

      setImgPreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  /* ------------------------------------ 글 ----------------------------------- */

  const formData = new FormData();

  formData.append('image', image);

  const postData = {
    title: titleField,
    describe: contentField,
  };

  const json = JSON.stringify(postData);
  const blob = new Blob([json], {
    type: 'application/json',
  });

  formData.append('request', blob);

  async function onClickPostButton(e) {
    e.preventDefault();

    await axiosInstance
      .post('http://localhost:8080/picture', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then(() => {
        navigate('/');
        location.reload();
      })
      .catch((err) => {
        console.log(err);
      });

    for (let key of formData.entries()) {
      console.log(key);
    }
  }

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

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
