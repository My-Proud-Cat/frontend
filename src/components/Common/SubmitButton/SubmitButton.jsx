import styles from './SubmitButton.module.css';

function SubmitButton({ comment, ...restProps }) {
  return (
    <>
      {comment ? (
        <div className={styles.commentLayout}>
          <button className={styles.commentSubmitButton} {...restProps}>
            등록
          </button>
        </div>
      ) : (
        <div className={styles.layout}>
          <button className={styles.submitButton} {...restProps}>
            등록
          </button>
        </div>
      )}
    </>
  );
}

export default SubmitButton;
