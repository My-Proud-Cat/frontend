import { useState } from 'react';
import styles from './Popup.module.css';

const Popup = () => {
  const [Popup, setPopup] = useState(true);

  const onClickCancelButton = () => {
    setPopup(false);
  };

  return (
    <>
      {Popup ? (
        <div className={styles.layout}>
          <section className={styles.position}>
            <p className={styles.title}>축하드립니다 !</p>

            <img src="" alt="" className={styles.img} />
            <p className={styles.subtitle}>2023 크리스마스 뱃지</p>

            <p className={styles.content}>
              크리스마스 테마 부분에 선정되셨습니다
            </p>

            <button
              name="cancel"
              onClick={() => {
                onClickCancelButton();
              }}
              className={styles.cancel}
            >
              닫기
            </button>
          </section>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Popup;
