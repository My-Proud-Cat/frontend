import styles from './App.module.css';
import { Route, Routes } from 'react-router-dom';
import Header from 'components/Common/Header/Header';
import PicturePage from 'pages/PicturePage';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Routes>
        <Route path="/" element={<PicturePage />} />
      </Routes>
    </div>
  );
}

export default App;
