import styles from './PictureWirte.module.css';
import Banner from 'components/Common/Banner/Banner';
import WriteInput from 'components/Common/WriteInput/WriteInput';

function PictureWirte() {
  return (
    <>
      <Banner />

      <div className={styles.layout}>
        <WriteInput />
      </div>
    </>
  );
}

export default PictureWirte;
