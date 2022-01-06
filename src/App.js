import { Route, Routes } from 'react-router-dom';
import AllMeetUpsPage from './pages/AllMeetUps';
import FavoritesPage from './pages/Favorites';
import NewMeetUpPage from './pages/NewMeetUp';
// import MainNavBar from './components/layout/MainNavBar';
import './App.css';
import Layout from './components/layout/Layout';

function App() {
  return (
    <div className="App">
      {/* <MainNavBar /> <= trasferito in Layout.jsx 
      per sostituirtlo col componente Layout */}
      <Layout>
        <Routes>
          <Route path="/" element={<AllMeetUpsPage />} />
          <Route path="newmeetup" element={<NewMeetUpPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>Sorry, there's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
