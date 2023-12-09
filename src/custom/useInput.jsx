import { axiosInstance } from 'custom/authToken';
import { useParams, useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import { titleState } from '@store/getPictureTitleData';
import { contentState } from '@store/getPictureContentData';
import { useRecoilState, useRecoilValue } from 'recoil';

const useInput = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const titleField = useRecoilValue(titleState);
  const contentField = useRecoilValue(contentState);

  const [title, setTitle] = useRecoilState(titleState);
  const [content, setContent] = useRecoilState(contentState);

  /* 텍스트 지우는 함수 */
  function clearText() {
    document.getElementById('comment').value = '';
  }

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

  const onClickPostButton = async (e) => {
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
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  /* ---------------------------------- 수정/삭제 --------------------------------- */

  const [updateMode, setUpdateMode] = useState(false);

  const onClickUpdateButton = async () => {
    setUpdateMode(true);
  };

  const onCliclCancelButton = () => {
    setUpdateMode(false);
  };

  const onSubmitUpdateButton = async () => {
    await axiosInstance
      .put(`http://localhost:8080/picture/${id}`, postData)
      .then(() => {
        location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onClickDeleteButton = async () => {
    const ok = window.confirm('삭제 하시겠습니까?');

    if (ok) {
      await axiosInstance
        .delete(`http://localhost:8080/picture/${id}`)
        .then(() => {
          navigate('/');
          location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return {
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
    updateMode,
    onSubmitUpdateButton,
    onCliclCancelButton,
    onClickUpdateButton,
    onClickDeleteButton,
  };
};

export default useInput;
