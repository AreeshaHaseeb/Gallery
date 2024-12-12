import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./Pages/About";
import Counter from "./Pages/Counter";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
