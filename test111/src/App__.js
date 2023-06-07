import PlacePage from "./components/PlacePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
      <div className="main_t">
        <a href="/">남해 바다</a>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<PlacePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;