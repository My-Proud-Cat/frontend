import styles from './LoginInput.module.css';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { emailState, passwordState } from '@store/authUserState';

const LoginInput = () => {
  const navigate = useNavigate();

  const emailField = useRecoilValue(emailState);
  const passwordField = useRecoilValue(passwordState);

  const [email, setEmail] = useRecoilState(emailState);
  const [password, setPassword] = useRecoilState(passwordState);

  const userData = {
    email: emailField,
    password: passwordField,
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onClickLoginButton = async () => {
    await axios
      .post('http://localhost:8080/auth/login', userData)
      .then((response) => {
        console.log(response.data);

        if (response.data.accessToken && response.data.refreshToken) {
          localStorage.setItem('accessToken', response.data.accessToken);
          localStorage.setItem('refreshToken', response.data.refreshToken);

          axios.defaults.headers.common[
            'Authorization'
          ] = `Bearer ${response.data.accessToken}`;

          console.log(axios.defaults.headers.common);

          /* return axios.post('http://localhost:8080/auth/login', {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }); */
        }
      })
      .then(() => {
        // navigate('/');
        // location.reload();
        console.log('로그인 성공');
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
            onChange={() => {
              onChangeEmail(event);
            }}
          />
        </div>

        <div className={styles.pw}>
          <p className={styles.label}>비밀번호</p>

          <input
            className={styles.input}
            id="pw"
            type="text"
            placeholder="비밀번호 입력"
            onChange={() => {
              onChangePassword(event);
            }}
          />
        </div>

        <button
          className={styles.login}
          type="submit"
          onClick={() => {
            onClickLoginButton();
          }}
        >
          로그인
        </button>
      </div>
    </div>
  );
};

export default LoginInput;
