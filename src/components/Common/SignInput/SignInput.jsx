import styles from './SignInput.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  signEmailState,
  signPasswordState,
  signNicknameState,
} from '@store/authUserSignUp';

const SignInput = () => {
  const navigate = useNavigate();

  const emailField = useRecoilValue(signEmailState);
  const passwordField = useRecoilValue(signPasswordState);
  const nicknameField = useRecoilValue(signNicknameState);

  const [email, setEmail] = useRecoilState(signEmailState);
  const [password, setPassword] = useRecoilState(signPasswordState);
  const [nickname, setNickname] = useRecoilState(signNicknameState);

  const userData = {
    email: emailField,
    password: passwordField,
    nickname: nicknameField,
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  const onClickSignUpButton = async () => {
    await axios
      .post('http://localhost:8080/auth/sign-up', userData)
      .then(() => {
        navigate('/login');
        location.reload();
        console.log('회원가입 성공');
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
            onChange={() => {
              onChangeEmail(event);
            }}
          />
        </div>

        <div>
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

        <div className="">
          <p className={styles.label}>닉네임</p>
          <input
            className={styles.input}
            id="nickname"
            type="text"
            placeholder="닉네임 입력"
            onChange={() => {
              onChangeNickname(event);
            }}
          />
        </div>

        <button
          className={styles.login}
          type="submit"
          onClick={() => {
            onClickSignUpButton();
          }}
        >
          회원가입
        </button>
      </div>
    </div>
  );
};

export default SignInput;
