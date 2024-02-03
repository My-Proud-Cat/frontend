import styles from './App.module.css';
import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import Header from 'components/Common/Header/Header';
import Login from 'components/LoginPage/Login';
import SignUp from 'components/SignUpPage/SignUp';
import PicturePage from 'pages/PicturePage';
import PictureWirte from 'components/PicturePage/PictureWrite/PictureWirte';
import PictureDetail from 'components/PicturePage/PictureDetail/PictureDetail';
import MyPage from 'components/Mypage/MyPage';

function App() {
  return (
    <div className={styles.App}>
      <Header />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path="/" element={<PicturePage />} />
          <Route path="/write" element={<PictureWirte />} />
          <Route path="/:id" element={<PictureDetail />} />

          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
