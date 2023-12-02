import styles from './UpdatePage.module.css';
import useInput from 'custom/useInput';

const UpdatePage = () => {
  const {
    onClickFileInput,
    onChangeFile,
    onSubmitUpdateButton,
    onChangeTitle,
    onChangeContent,
    title,
    content,
    imgPreview,
    fileInputRef,
  } = useInput();

  return (
    <div className={styles.layout}>
      <p>글 작성</p>

      <form encType="multipart/form-data">
        <div className={styles.layout2}>
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
      </form>
    </div>
  );
};

export default UpdatePage;
