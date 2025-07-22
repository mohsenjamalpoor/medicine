import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import InstructionsPage from "./components/InstructionsPage";
import VentilatorPage from "./components/VentilatorPage";
import DiseasesPage from "./components/DiseasesPage";
import HeartPage from "./components/HeartPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
       
        <Route path="/instructions" element={<InstructionsPage />} />
        <Route path="/ventilator" element={<VentilatorPage />} />
        <Route path="/diseases" element={<DiseasesPage />} />
        <Route path="/heart" element={<HeartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
