import styles from './UpdatePage.module.css';
import useInput from 'custom/useInput';

const UpdatePage = () => {
  const { onClickFileInput, onChangeTitle, onChangeContent, title, content } =
    useInput();

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
            <button onClick={onClickFileInput} type="button" disabled>
              사진은 변경할 수 없어요
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdatePage;
