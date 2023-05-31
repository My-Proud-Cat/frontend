import styles from './AnswerEditor.module.css';

function AnswerEditor() {
  return (
    <>
      <div className={styles.comment}>
        <div className={styles.info}>
          <p className={styles.name}>작성자</p>
          <p className={styles.date}>2023.05.27</p>
        </div>

        <p className={styles.answer}>
          내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
        </p>
      </div>

      <div className={styles.comment}>
        <div className={styles.info}>
          <p className={styles.name}>작성자</p>
          <p className={styles.date}>2023.05.27</p>
        </div>

        <p className={styles.answer}>
          내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
        </p>
      </div>
    </>
  );
}

export default AnswerEditor;
