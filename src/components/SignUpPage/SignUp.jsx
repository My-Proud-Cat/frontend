import styles from './SignUp.module.css';
import SignInput from 'components/Common/SignInput/SignInput';

const SignUp = () => {
  return (
    <div className={styles.layout}>
      <p className={styles.title}>회원가입</p>

      <SignInput />
    </div>
  );
};

export default SignUp;
