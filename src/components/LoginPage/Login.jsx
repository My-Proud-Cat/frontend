import styles from './Login.module.css';
import LoginInput from 'components/Common/LoginInput/LoginInput';

const Login = () => {
  return (
    <div className={styles.layout}>
      <p className={styles.title}>로그인</p>

      <LoginInput />
    </div>
  );
};

export default Login;
