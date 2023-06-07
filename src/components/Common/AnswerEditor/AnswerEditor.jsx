import styles from './AnswerEditor.module.css';
import DotButton from 'components/Common//DotButton/DotButton';

function AnswerEditor({ item }) {
  const { comment, user, createdAt } = item;

  return (
    <>
      <div className={styles.comment}>
        <div className={styles.info}>
          <p className={styles.name}>{user.nickname}</p>

          <div className={styles.position}>
            <DotButton />
            <p className={styles.date}>2023.05.27</p>
          </div>
        </div>

        <p className={styles.answer}>{comment}</p>
      </div>
    </>
  );
}

export default AnswerEditor;
