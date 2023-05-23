import styles from './PictureWirte.module.css';
import Banner from 'components/Common/Banner/Banner';
import FormInput from 'components/Common/FormInput/FormInput';

function PictureWirte() {
  return (
    <>
      <Banner />

      <div className={styles.layout}>
        <FormInput />
      </div>
    </>
  );
}

export default PictureWirte;
