import styles from './SubmitButton.module.css';

function SubmitButton({ ...restProps }) {
  return (
    <div className={styles.layout}>
      <button className={styles.submitButton} {...restProps}>
        등록
      </button>
    </div>
  );
}

export default SubmitButton;
