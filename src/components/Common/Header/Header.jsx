import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import styled from 'styled-components';
import { hover } from '@testing-library/user-event/dist/hover';

const LinkHover = styled(Link)`
  &:hover {
    color: var(--primary);
  }
`;

function Header() {
  return (
    <div className={styles.layout}>
      <p className={styles.logo}>로고 자리</p>

      <div className={styles.nav}>
        <div className={styles.category}>
          <LinkHover to="/">인생샷</LinkHover>
          <LinkHover to="/">커뮤니티</LinkHover>
          <LinkHover to="/">유기묘 후원</LinkHover>
        </div>

        <div className={styles.category}>
          <LinkHover to="/">로그인</LinkHover>
          <LinkHover to="/">회원가입</LinkHover>
        </div>
      </div>
    </div>
  );
}

export default Header;
