import { string } from 'prop-types';
import styles from './WriteInput.module.css';

function WriteInput() {
  return (
    <>
      <div>
        <p>글 작성</p>

        <div className={styles.layout}>
          <div className={styles.input}>
            <input className={styles.title} placeholder="제목을 입력해주세요" />
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
    </>
  );
}

export default WriteInput;

WriteInput.defaultProps = {
  type: 'text',
  placeholder: string,
};
