import styles from './DotButton.module.css';
import { useState } from 'react';
import { ReactComponent as Dot } from 'assets/dot.svg';
import { useRecoilState } from 'recoil';
import { getPictureComment } from '@store/getPictureCommentData';
import axios from 'axios';
import { useParams } from 'react-router';

const DotButton = ({ item }) => {
  const { id } = useParams();

  const [comments, setComments] = useRecoilState(getPictureComment(id));

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
      await axios.put(`http://localhost:8080/${id}/comment`, {
        // comment: commentField.value,
      });
    }
  };
  const clickDelete = async () => {
    const ok = window.confirm('삭제 하시겠습니까?');

    if (ok) {
      await axios
        .delete(`http://localhost:8080/proudcat/${id}/comment/${item.id}`, {
          data: {
            id: comments.id,
          },
        })
        .then(() => {
          location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
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
        <button
          name="update"
          onClick={() => {
            // clickUpdate();
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
