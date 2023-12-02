import styles from './SubmitButton.module.css';

function SubmitButton({ category, comment, ...restProps }) {
  return (
    <>
      {comment ? (
        <div className={styles.commentLayout}>
          <button
            className={styles.commentSubmitButton}
            type="submit"
            {...restProps}
          >
            {category}
          </button>
        </div>
      ) : (
        <div className={styles.layout}>
          <button className={styles.submitButton} type="submit" {...restProps}>
            {category}
          </button>
        </div>
      )}
    </>
  );
}

export default SubmitButton;
