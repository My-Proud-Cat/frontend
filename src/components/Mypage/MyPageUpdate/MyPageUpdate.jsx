import styles from './MyPageUpdate.module.css';
import SubmitButton from 'components/Common/SubmitButton/SubmitButton';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { axiosInstance } from 'custom/authToken';
import useInput from 'custom/useInput';

const MyPageUpdate = () => {
  const { clearText, fileInputRef, onClickFileInput, onChangeFile } =
    useInput();

  const navigate = useNavigate();

  const onClickDeleteButton = () => {};

  const onClickChangeButton = async () => {
    // await axiosInstance.get();
  };

  const onClickCancelButton = () => {
    navigate('/mypage');
  };

  return (
    <div className={styles.layout}>
      <div className={styles.layout2}>
        <p className={styles.title}>프로필 수정</p>

        <form onSubmit={onClickChangeButton} encType="multipart/form-data">
          <table className={styles.table}>
            <tbody>
              <tr className={styles.line}>
                <th>프로필 사진</th>

                <td>
                  <div>
                    <img src="" alt="" className={styles.profile_img} />

                    <div className={styles.profile_button}>
                      <button
                        name="change"
                        onClick={() => {
                          onClickFileInput();
                        }}
                      >
                        사진변경
                      </button>

                      <input
                        id="file"
                        type="file"
                        accept="image/jpg, image/jpeg, image/png"
                        ref={fileInputRef}
                        className={styles.change_img}
                      />

                      <button
                        name="delete"
                        onClick={() => {
                          onClickDeleteButton();
                        }}
                      >
                        삭제
                      </button>
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
                        <option value="0">1살 미만</option>
                        <option value="1">1살</option>
                        <option value="2">2살</option>
                        <option value="3">3살</option>
                        <option value="4">4살</option>
                        <option value="5">5살</option>
                        <option value="6">6살</option>
                        <option value="7">7살</option>
                        <option value="8">8살</option>
                        <option value="9">9살</option>
                        <option value="10">10살</option>
                        <option value="11">11살</option>
                        <option value="12">12살</option>
                        <option value="13">13살</option>
                        <option value="14">14살</option>
                        <option value="15">15살</option>
                        <option value="16">16살</option>
                        <option value="17">17살</option>
                        <option value="18">18살</option>
                        <option value="19">19살</option>
                        <option value="20">20살</option>
                        <option value="21">21살</option>
                        <option value="22">22살</option>
                        <option value="23">23살</option>
                        <option value="24">24살</option>
                        <option value="25">25살</option>
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
