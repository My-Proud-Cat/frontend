import styles from './AnswerEditor.module.css';
import DotButton from 'components/Common//DotButton/DotButton';
import { getPictureComment } from '@store/getPictureCommentData';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';

function AnswerEditor({ item }) {
  const { id } = useParams();

  useRecoilState(getPictureComment(id));
  // item = [commentData].find(() => id);

  // console.log(item.content);

  return (
    <>
      <div className={styles.comment}>
        <div className={styles.info}>
          {/* <p className={styles.name}>{user?.nickname}</p> */}
          <p className={styles.name}>닉넴</p>

          <div className={styles.position}>
            <DotButton />
            <p className={styles.date}>2023.05.27</p>
          </div>
        </div>

        <p className={styles.answer}>{item.content}</p>
      </div>
    </>
  );
}

export default AnswerEditor;
