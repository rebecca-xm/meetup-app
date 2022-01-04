import { Route, Routes } from 'react-router-dom';
import AllMeetUpsPage from './pages/AllMeetUps';
import FavoritesPage from './pages/Favorites';
import NewMeetUpPage from './pages/NewMeetUp';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AllMeetUpsPage />} />
        <Route path="newmeetup" element={<NewMeetUpPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
      </Routes>
    </div>
  );
}

export default App;
