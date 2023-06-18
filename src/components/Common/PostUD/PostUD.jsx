import styles from './PostUD.module.css';

const PostUD = () => {
  return (
    <div className={styles.layout}>
      <button className={styles.update}>수정</button>
      <button className={styles.delete}>삭제</button>
    </div>
  );
};

export default PostUD;
