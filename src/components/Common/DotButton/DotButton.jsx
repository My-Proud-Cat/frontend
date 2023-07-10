import styles from './DotButton.module.css';
import { ReactComponent as Dot } from 'assets/dot.svg';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { getPictureComment } from '@store/getPictureCommentData';
import { useParams } from 'react-router';

const DotButton = ({ item, ...restProps }) => {
  const { id } = useParams();

  const [comments, setComments] = useRecoilState(getPictureComment(id));

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
        <button name="update" {...restProps}>
          수정
        </button>
        <button name="delete" {...restProps}>
          삭제
        </button>
      </div>
    </div>
  );
};

export default DotButton;
