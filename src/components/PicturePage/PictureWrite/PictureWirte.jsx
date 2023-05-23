import styles from './PictureWirte.module.css';
import Banner from 'components/Common/Banner/Banner';
import FormInput from 'components/Common/FormInput/FormInput';
import SubmitButton from 'components/Common/SubmitButton/SubmitButton';

function PictureWirte() {
  return (
    <>
      <Banner />

      <div className={styles.layout}>
        <FormInput />
        <SubmitButton />
      </div>
    </>
  );
}

export default PictureWirte;
