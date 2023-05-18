import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.layout}>
      <p className={styles.logo}>로고 자리</p>

      <div className={styles.nav}>
        <div className={styles.category}>
          <p>인생샷</p>
          <p>커뮤니티</p>
          <p>유기묘 후원</p>
        </div>

        <div className={styles.category}>
          <p>로그인</p>
          <p>회원가입</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
