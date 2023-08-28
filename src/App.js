import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import FooterComponent from "./components/FooterComponent";
import ProgramDisplay from "./components/ProgramDisplay";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar/> 
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/program" element={<ProgramDisplay />} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
