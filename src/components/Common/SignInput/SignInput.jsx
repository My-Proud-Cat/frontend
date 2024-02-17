import styles from './SignInput.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  signEmailState,
  signPasswordState,
  signNicknameState,
} from '@store/authUserSignUp';
import { useState } from 'react';

const SignInput = () => {
  const navigate = useNavigate();

  const emailField = useRecoilValue(signEmailState);
  const passwordField = useRecoilValue(signPasswordState);
  const nicknameField = useRecoilValue(signNicknameState);

  const [email, setEmail] = useRecoilState(signEmailState);
  const [password, setPassword] = useRecoilState(signPasswordState);
  const [nickname, setNickname] = useRecoilState(signNicknameState);

  const [emailError, setEmailError] = useState(false);
  const [paswwordError, setPasswordError] = useState(false);
  const [nicknameError, setNicknameError] = useState(false);

  const userData = {
    email: emailField,
    password: passwordField,
    nickname: nicknameField,
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);

    if (email.length < 2 || email.length > 10) {
      setEmailError(true);
    } else setEmailError(false);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);

    if (password.length < 8 || password.length > 14) {
      setPasswordError(true);
    } else setPasswordError(false);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);

    if (nickname.length < 2 || nickname.length > 8) {
      setNicknameError(true);
    } else setNicknameError(false);
  };

  const onClickSignUpButton = async () => {
    if (email.length === 0 || password.length === 0 || nickname.length === 0) {
      alert('빈 칸을 모두 채워주세요');
    } else if (
      emailError === true ||
      paswwordError === true ||
      nicknameError === true
    ) {
      alert('양식에 맞게 입력해주세요');
    } else {
      await axios
        .post('http://localhost:8080/auth/sign-up', userData)
        .then(() => {
          alert('회원가입이 완료되었습니다!');

          if (alert) {
            navigate('/login');
            location.reload();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const onSignUpKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClickSignUpButton();
    }
  };

  return (
    <div className={styles.layout}>
      <div className={styles.position}>
        <div>
          <div className={styles.formPosition}>
            <p className={styles.label}>이메일</p>

            {emailError === true ? (
              <p className={styles.form}>영문 2~8자 이내로 입력해주세요</p>
            ) : (
              <p className={styles.form_none}></p>
            )}
          </div>

          <input
            className={styles.input}
            id="email"
            type="text"
            placeholder="이메일 입력"
            onChange={() => {
              onChangeEmail(event);
            }}
            onKeyDown={() => onSignUpKeyPress(event)}
          />
        </div>

        <div>
          <div className={styles.formPosition}>
            <p className={styles.label}>비밀번호</p>

            {paswwordError === true ? (
              <p className={styles.form}>8~14자 이내로 입력해주세요</p>
            ) : (
              <p className={styles.form_none}></p>
            )}
          </div>

          <input
            className={styles.input}
            id="pw"
            type="password"
            placeholder="비밀번호 입력"
            onChange={() => {
              onChangePassword(event);
            }}
            onKeyDown={() => onSignUpKeyPress(event)}
          />
        </div>

        <div className="">
          <div className={styles.formPosition}>
            <p className={styles.label}>닉네임</p>

            {nicknameError === true ? (
              <p className={styles.form}>
                특수문자 제외 2~8자 이내로 입력해주세요
              </p>
            ) : (
              <p className={styles.form_none}></p>
            )}
          </div>

          <input
            className={styles.input}
            id="nickname"
            type="text"
            placeholder="닉네임 입력"
            onChange={() => {
              onChangeNickname(event);
            }}
            onKeyDown={() => onSignUpKeyPress(event)}
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
