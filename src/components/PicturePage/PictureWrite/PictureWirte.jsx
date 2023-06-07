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
      .post('http://localhost:3001/picture', {
        title: titleField,
        content: contentField,
        img: '',
        user: {
          nickname: '테스트33',
          user_id: '임시 아이디',
        },
        view: 0,
        like: 6,
        created_at: Date.now(),
      })
      .then((res) => {
        console.log(res);
        navigate('/');
        window.location.reload();
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
