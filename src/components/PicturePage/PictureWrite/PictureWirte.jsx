import styles from './PictureWirte.module.css';
import Banner from 'components/Common/Banner/Banner';
import WriteInput from 'components/Common/WriteInput/WriteInput';
import SubmitButton from 'components/Common/SubmitButton/SubmitButton';
import axios from 'axios';

function PictureWirte() {
  async function onClickButton() {
    await axios
      .post('http://localhost:3001/picture', {
        title: '임시 제목',
        describe: '임시 내용',
        img: '',
        user: {
          nickname: '임시 닉네임',
          user_id: '임시 아이디',
        },
        view: 2,
        like: 9,
        created_at: new Date().getTime(),
      })
      .then((res) => {
        console.log(res);
      });
  }

  return (
    <>
      <Banner />

      <div className={styles.layout}>
        <WriteInput />

        <SubmitButton onClick={onClickButton} />
      </div>
    </>
  );
}

export default PictureWirte;
