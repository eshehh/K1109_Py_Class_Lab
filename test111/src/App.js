import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Map from './components/Map';
import GeojedoPage from './components/GeojedoPage';
import GeomundoPage from './components/GeomundoPage';
import ChujadoPage from './components/ChujadoPage';
import TongyeongPage from './components/TongyeongPage';
import PlacePage from './components/PlacePage';

function App() {
  return (
    <div>
      <div className="main_t">
      <a href="/">남해 바다</a>
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<Map />} />
          <Route path="/거제도" element={<GeojedoPage />} />
          <Route path="/거문도" element={<GeomundoPage />} />
          <Route path="/추자도" element={<ChujadoPage />} />
          <Route path="/통영" element={<TongyeongPage />} />
          <Route path="*" element={<PlacePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
