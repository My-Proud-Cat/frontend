import styles from './MyPageUpdate.module.css';
import { useNavigate } from 'react-router-dom';
import SubmitButton from 'components/Common/SubmitButton/SubmitButton';

const MyPageUpdate = () => {
  const navigate = useNavigate();

  const onClickCancelButton = () => {
    navigate('/mypage');
  };

  return (
    <div className={styles.layout}>
      <div className={styles.layout2}>
        <p className={styles.title}>프로필 수정</p>

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
                      <input type="radio" name="cat" value="true" />
                      있어요
                      <input type="radio" name="cat" value="false" />
                      없어요
                    </div>
                  </div>

                  <div className={styles.info_detail}>
                    <div className={styles.cat_info}>
                      <p>고양이 이름</p>
                      <input type="text" name="name" />
                    </div>

                    <div className={styles.cat_info}>
                      <p>고양이 종</p>
                      <input type="text" name="kind" />
                    </div>

                    <div className={styles.cat_info}>
                      <p>고양이 성별</p>
                      <input type="radio" name="gender" value="male" />
                      남아
                      <input type="radio" name="gender" value="female" />
                      여아
                    </div>

                    <div className={styles.cat_info}>
                      <p>고양이 나이</p>
                      <select name="age">
                        <option value="unknown">모름</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                      </select>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <SubmitButton
            category="수정"
            onClick={() => {
              onClickCancelButton();
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default MyPageUpdate;
