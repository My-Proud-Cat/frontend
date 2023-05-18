import styles from './App.module.css';
import { Route, Routes } from 'react-router-dom';
import Header from 'components/Common/Header/Header';
import PictureList from 'components/PicturePage/PictureList/PictureList';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Routes>
        <Route path="/" element={<PictureList />} />
      </Routes>
    </div>
  );
}

export default App;
