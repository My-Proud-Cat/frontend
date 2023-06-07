import { useState } from 'react';
import styles from './DotButton.module.css';
import { ReactComponent as Dot } from 'assets/dot.svg';

const DotButton = () => {
  const [state, setState] = useState('hidden');

  const clickDot = () => {
    if (state === 'hidden') {
      setState('show');
    } else {
      setState('hidden');
    }
  };

  return (
    <div className={styles.layout}>
      <Dot
        className={styles.dot}
        onClick={() => {
          clickDot(event);
        }}
      />

      <div
        className={
          state === 'hidden' ? styles.option_hidden : styles.option_show
        }
      >
        <p name="update">수정</p>
        <p name="delete">삭제</p>
      </div>
    </div>
  );
};

export default DotButton;
