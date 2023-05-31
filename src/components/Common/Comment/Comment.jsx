import styles from './Comment.module.css';

function Comment() {
  return (
    <>
      <div className={styles.layout}>
        <label htmlFor="comment" className={styles.label}>
          댓글
        </label>
        <textarea
          id="comment"
          type="text"
          placeholder="댓글을 입력해주세요"
          className={styles.form}
        />
      </div>
    </>
  );
}

export default Comment;
