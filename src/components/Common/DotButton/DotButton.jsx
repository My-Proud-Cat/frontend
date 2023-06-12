import styles from './DotButton.module.css';
import { useState } from 'react';
import { ReactComponent as Dot } from 'assets/dot.svg';
import { useRecoilState } from 'recoil';
import { getPictureComment } from '@store/getPictureCommentData';
import axios from 'axios';

const DotButton = () => {
  const [comments, setComments] = useRecoilState(getPictureComment);

  const [state, setState] = useState('hidden');
  const [update, setUpdate] = useState(false);

  const clickDot = () => {
    if (state === 'hidden') {
      setState('show');
    } else {
      setState('hidden');
    }
  };

  const clickUpdate = async () => {
    setUpdate(true);

    if (update === true) {
      await axios.put('http://localhost:3001/comment', {
        // comment: commentField.value,
      });
    }
  };
  const clickDelete = async () => {
    await axios.delete('http://localhost:3001/comment');
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
        <button
          name="update"
          onClick={() => {
            clickUpdate();
          }}
        >
          수정
        </button>
        <button
          name="delete"
          onClick={() => {
            clickDelete();
          }}
        >
          삭제
        </button>
      </div>
    </div>
  );
};

export default DotButton;
