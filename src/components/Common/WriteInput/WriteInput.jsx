import { string } from 'prop-types';
import styles from './WriteInput.module.css';
import axios from 'axios';
import SubmitButton from 'components/Common/SubmitButton/SubmitButton';
import { useRecoilState, useRecoilValue } from 'recoil';
import { titleState } from '@store/getPictureTitleData';
import { contentState } from '@store/getPictureContentData';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

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

  const formData = new FormData();

  /* ------------------------------------ 글 ----------------------------------- */

  useEffect(() => {});

  async function onClickPostButton(e) {
    // formData.append('image', e.target.files[0]);

    const postData = {
      title: titleField,
      describe: contentField,
    };

    formData.append(
      'data',
      new Blob([JSON.stringify(postData)], { type: 'application/json' }),
    );

    await axios
      .post('http://localhost:8080/picture', formData, {
        headers: { 'Content-Type': `application/json` },
      })
      .then(() => {
        navigate('/');
        location.reload();
      })
      .catch((err) => {
        console.log(err);
      });

    /* for (let value of formData.values()) {
      console.log(value);
    } */
  }

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  // title: titleField,
  // describe: contentField,
  // image: formData,
  /* user: {
          nickname: '닉네임',
          user_id: '임시 아이디',
        }, */

  /* ----------------------------------- 파일 ----------------------------------- */

  const fileInputRef = useRef(null);

  const [image, setImage] = useState([]);
  const [imgPreview, setImgPreview] = useState(null);

  const onClickFileInput = () => {
    fileInputRef.current.click(); // 버튼을 클릭하면 input을 참조해서 input이 클릭되게 함 (원래는 눌러도 아무 반응 x - input이 아니라 버튼이 눌린 걸로 판정되기때문)
  };

  const onChangeFile = (e) => {
    console.log(e.target.files[0]);
    // setImage(e.target.files[0]);
  };

  /* ----------------------------------- 댓글 ----------------------------------- */

  const [commentField, setCommentField] = useState(null);

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
              <button onClick={onClickFileInput}>사진 추가하기</button>
              <input
                id="file"
                type="file"
                accept="image/jpg, image/jpeg, image/png"
                ref={fileInputRef}
                onChange={onChangeFile}
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
