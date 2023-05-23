import styles from './SubmitButton.module.css';

function SubmitButton() {
  return (
    <div className={styles.layout}>
      <button type="submit" className={styles.submitButton}>
        등록
      </button>
    </div>
  );
}

export default SubmitButton;
