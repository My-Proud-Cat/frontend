import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { authState } from '@store/authUserLogin';
import { useEffect, useState } from 'react';
import { axiosInstance } from 'custom/authToken';

const LinkHover = styled(Link)`
  &:hover {
    color: var(--primary);
  }
`;

function Header() {
  const [token, setToken] = useRecoilState(authState);
  const [nickname, setNickname] = useState('');

  const storage = localStorage.getItem('accessToken');

  useEffect(() => {
    if (storage) {
      setToken(true);

      /* axiosInstance
        .get('http://localhost:8080/auth/user-detail')
        .then((response) => {
          setNickname(response.data.nickname);
        })
        .catch(() => {}); */
    }
  }, []);

  const onClickLogoutButton = async () => {
    await axiosInstance
      .get('http://localhost:8080/auth/logout')
      .then(() => {
        localStorage.clear();
        location.reload();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className={styles.layout}>
      <Link to="/" className={styles.logo}>
        My Proud Cat
      </Link>

      <div className={styles.nav}>
        <div className={styles.category}>
          <LinkHover to="/">인생샷</LinkHover>
          <LinkHover to="/theme">테마샷</LinkHover>
        </div>

        {token === true ? (
          <div className={styles.category}>
            <LinkHover to="/mypage">{nickname}</LinkHover>
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
