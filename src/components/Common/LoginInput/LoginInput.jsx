import styles from './LoginInput.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { emailState, passwordState } from '@store/authUserLogin';
import { axiosInstance } from 'custom/authToken';
import { message } from 'antd';

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
        if (response.data.accessToken && response.data.refreshToken) {
          localStorage.setItem('accessToken', response.data.accessToken);
          localStorage.setItem('refreshToken', response.data.refreshToken);
        }

        /* if (response.status === 200) {
          axiosInstance
            .get('http://localhost:8080/auth/user-detail')
            .then(() => {});
        } */
      })
      .then(() => {
        navigate('/');
        location.reload();
      })
      .catch((err) => {
        console.error(err);

        if (err.response.status === 400) {
          alert(err.response.data.message);
        }
      });
  };

  const onLoginKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClickLoginButton();
    }
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
            onKeyDown={() => onLoginKeyPress(event)}
          />
        </div>

        <div className={styles.pw}>
          <p className={styles.label}>비밀번호</p>

          <input
            className={styles.input}
            id="pw"
            type="password"
            placeholder="비밀번호 입력"
            onChange={() => {
              onChangePassword(event);
            }}
            onKeyDown={() => onLoginKeyPress(event)}
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
