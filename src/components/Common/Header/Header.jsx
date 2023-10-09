import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { authState } from '@store/authUserLogin';
import { useEffect } from 'react';
import { axiosInstance } from 'custom/authToken';

const LinkHover = styled(Link)`
  &:hover {
    color: var(--primary);
  }
`;

function Header() {
  const [token, setToken] = useRecoilState(authState);

  const storage = localStorage.getItem('refreshToken');

  useEffect(() => {
    if (storage) {
      setToken(true);
    }
  }, []);

  const onClickLogoutButton = async () => {
    axiosInstance.get('http://localhost:8080/auth/logout').then((response) => {
      console.log(response.data);
      localStorage.clear();
      location.reload();
    });
  };

  return (
    <div className={styles.layout}>
      <Link
        to="/"
        className={styles.logo}
        onClick={() => {
          location.reload();
        }}
      >
        My Proud Cat
      </Link>

      <div className={styles.nav}>
        <div className={styles.category}>
          <LinkHover to="/">인생샷</LinkHover>
          <LinkHover to="/">커뮤니티</LinkHover>
          <LinkHover to="/">유기묘 후원</LinkHover>
        </div>

        {token === true ? (
          <div className={styles.category}>
            <LinkHover to="/">닉네임</LinkHover>
            <LinkHover
              to="/"
              onClick={() => {
                onClickLogoutButton();
              }}
            >
              로그아웃
            </LinkHover>
          </div>
        ) : (
          <div className={styles.category}>
            <LinkHover to="/login">로그인</LinkHover>
            <LinkHover to="/signup">회원가입</LinkHover>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
