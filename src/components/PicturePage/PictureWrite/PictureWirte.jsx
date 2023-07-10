import styles from './PictureWirte.module.css';
import Banner from 'components/Common/Banner/Banner';
import WriteInput from 'components/Common/WriteInput/WriteInput';
import SubmitButton from 'components/Common/SubmitButton/SubmitButton';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { titleState } from '@store/getPictureTitleData';
import { contentState } from '@store/getPictureContentData';

function PictureWirte() {
  const navigate = useNavigate();

  const titleField = useRecoilValue(titleState);
  const contentField = useRecoilValue(contentState);

  async function onClickButton() {
    await axios
      .post('http://localhost:8080/picture/test', {
        title: titleField,
        describe: contentField,
        image: '',
        /* user: {
          nickname: '닉네임',
          user_id: '임시 아이디',
        }, */
      })
      .then(() => {
        navigate('/');
        location.reload();
      })
      .catch((err) => {
        // console.log(location.origin);
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
