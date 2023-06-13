import styles from './Comment.module.css';
import AnswerEditor from 'components/Common/AnswerEditor/AnswerEditor';
import { useState } from 'react';
import { useRecoilValueLoadable } from 'recoil';
import { getPictureComment } from '@store/getPictureCommentData';
import WriteInput from 'components/Common/WriteInput/WriteInput';
import { useNavigate, useParams } from 'react-router-dom';

function Comment() {
  const { id } = useParams();

  // const pictureCommentData = useRecoilValueLoadable(getPictureComment(id));
  // const [comment, setComment] = useState([...pictureCommentData]);

  return (
    <>
      <div className={styles.layout}>
        <p className={styles.label}>댓글</p>

        <WriteInput comment="true" />
      </div>

      {/* {comment.map((item) => {
        return <AnswerEditor key={item.id} item={item} />;
      })} */}
    </>
  );
}

export default Comment;
