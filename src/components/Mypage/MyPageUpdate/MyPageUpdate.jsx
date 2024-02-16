import { useNavigate } from 'react-router-dom';
import styles from './MyPageUpdate.module.css';

const MyPageUpdate = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.layout}>
      <div className={styles.layout2}>
        <p className={styles.title}>프로필 수정</p>

        <div className="">
          <form action="">
            <table className={styles.table}>
              <tbody>
                <tr className={styles.line}>
                  <th>프로필 사진</th>

                  <td>
                    <div className="">
                      <img src="" alt="" className={styles.profile_img} />

                      <div className={styles.profile_button}>
                        <button name="change">사진변경</button>
                        <button name="delete">삭제</button>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>정보 수정</th>

                  <td className={styles.info_layout}>
                    <div className={styles.info}>
                      <div className={styles.nickname}>
                        <p>닉네임</p>
                        <input type="text" name="nickname" />
                      </div>

                      <div className={styles.cat_check}>
                        <p>고양이</p>
                        <input type="radio" name="true" />
                        있어요
                        <input type="radio" name="false" />
                        없어요
                      </div>
                    </div>

                    <div className={styles.info_detail}>
                      <div className={styles.name}>
                        <p>고양이 이름</p>
                        <input type="text" name="name" />
                      </div>

                      <div className={styles.name}>
                        <p>고양이 종</p>
                        <input type="text" name="name" />
                      </div>

                      <div className={styles.name}>
                        <p>고양이 성별</p>
                        <input type="text" name="name" />
                      </div>

                      <div className={styles.name}>
                        <p>고양이 이름</p>
                        <input type="text" name="name" />
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className={styles.sumbit}>
              <button name="update">수정</button>
              <button name="cancel">취소</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyPageUpdate;
