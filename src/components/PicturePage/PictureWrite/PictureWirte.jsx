import styles from './PictureWirte.module.css';
import Banner from 'components/Common/Banner/Banner';
import WriteInput from 'components/Common/WriteInput/WriteInput';
import SubmitButton from 'components/Common/SubmitButton/SubmitButton';

function PictureWirte() {
  return (
    <>
      <Banner />

      <div className={styles.layout}>
        <WriteInput />

        <SubmitButton />
      </div>
    </>
  );
}

export default PictureWirte;
