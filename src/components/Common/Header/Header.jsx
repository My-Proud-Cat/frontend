import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import styled from 'styled-components';

const LinkHover = styled(Link)`
  &:hover {
    color: var(--primary);
  }
`;

function Header() {
  return (
    <div className={styles.layout}>
      <Link to="/" className={styles.logo}>
        로고 자리
      </Link>

      <div className={styles.nav}>
        <div className={styles.category}>
          <LinkHover to="/">인생샷</LinkHover>
          <LinkHover to="/write">커뮤니티</LinkHover>
          <LinkHover to="/detail">유기묘 후원</LinkHover>
        </div>

        <div className={styles.category}>
          <LinkHover to="/login">로그인</LinkHover>
          <LinkHover to="/signup">회원가입</LinkHover>
        </div>
      </div>
    </div>
  );
}

export default Header;
