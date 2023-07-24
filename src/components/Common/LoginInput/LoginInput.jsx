import styles from './LoginInput.module.css';

const LoginInput = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.position}>
        <div className={styles.email}>
          <p className={styles.label}>이메일</p>

          <input
            className={styles.input}
            id="email"
            type="text"
            placeholder="이메일 입력"
          />
        </div>

        <div className={styles.pw}>
          <p className={styles.label}>비밀번호</p>

          <input
            className={styles.input}
            id="pw"
            type="text"
            placeholder="비밀번호 입력"
          />
        </div>

        <button className={styles.login} type="submit">
          로그인
        </button>
      </div>
    </div>
  );
};

export default LoginInput;
