import styles from './SignInput.module.css';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignInput = () => {
  const navigate = useNavigate();

  const emailField = document.getElementById('email');
  const passwordField = document.getElementById('pw');
  const nicknameField = document.getElementById('nickname');

  const [email, setEmail] = useState('');

  const onClickSignUpButton = async (e) => {
    await axios
      .post('http://localhost:8080/auth/sign-up', {
        email: emailField,
        password: passwordField,
        nickname: nicknameField,
      })
      .then(() => {
        navigate('/');
        location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onChangEmail = (event) => {
    setEmail(event.tartget.value);
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
          <p className={styles.label}>닉네임</p>
          <input
            className={styles.input}
            id="nickname"
            type="text"
            placeholder="닉네임 입력"
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
