import styles from './SignInput.module.css';

const SignInput = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.position}>
        <div>
          <p className={styles.label}>이메일</p>

          <input
            className={styles.input}
            id="email"
            type="text"
            placeholder="이메일 입력"
          />
        </div>

        <div>
          <p className={styles.label}>비밀번호</p>

          <input
            className={styles.input}
            id="pw"
            type="text"
            placeholder="비밀번호 입력"
          />
        </div>

        <div className="">
          <p className={styles.label}>비밀번호 확인</p>
          <input
            className={styles.input}
            id="email"
            type="text"
            placeholder="비밀번호 확인 입력"
          />
        </div>

        <div className="">
          <p className={styles.label}>닉네임</p>
          <input
            className={styles.input}
            id="nickName"
            type="text"
            placeholder="닉네임 입력"
          />
        </div>

        <button className={styles.login} type="submit">
          회원가입
        </button>
      </div>
    </div>
  );
};

export default SignInput;
