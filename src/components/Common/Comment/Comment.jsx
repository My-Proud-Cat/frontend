import styles from './Comment.module.css';
import AnswerEditor from 'components/Common/AnswerEditor/AnswerEditor';
import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { getPictureComment } from '@store/getPictureCommentData';
import WriteInput from 'components/Common/WriteInput/WriteInput';
import { useParams } from 'react-router-dom';

function Comment() {
  const { id } = useParams();

  const pictureCommentData = useRecoilState(getPictureComment(id));
  const commentData = pictureCommentData[0];

  const [comment, setComment] = useState(commentData.commentDetails);

  const [empty, setEmpty] = useState(true);

  useEffect(() => {
    if (comment.length > 0) {
      setEmpty(false);
    } else if (comment.length === 0) {
      setEmpty(true);
    }
  }, []);

  return (
    <>
      <div className={styles.layout}>
        <p className={styles.label}>댓글</p>

        <WriteInput comment="true" />
      </div>

      {empty === true ? (
        <>
          <p className={styles.empty}>댓글이 없습니다 ㅠ_ㅠ</p>
        </>
      ) : (
        <>
          {comment.map((item, index) => {
            return <AnswerEditor key={index} item={item} />;
          })}
        </>
      )}
    </>
  );
}

export default Comment;
