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
        content: '임시 내용',
        img: '',
        user: {
          nickName: '임시 닉네임',
          userId: '임시 아이디',
        },
        hits: 2,
        like: 9,
        createdAt: '',
      })
      .then((error) => {
        console.log(error);
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
