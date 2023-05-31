import styles from './AnswerEditor.module.css';

function AnswerEditor({ item }) {
  const { comment, user, createdAt } = item;

  return (
    <>
      <div className={styles.comment}>
        <div className={styles.info}>
          <p className={styles.name}>{user.nickname}</p>
          <p className={styles.date}>2023.05.27</p>
        </div>

        <p className={styles.answer}>{comment}</p>
      </div>
    </>
  );
}

export default AnswerEditor;
