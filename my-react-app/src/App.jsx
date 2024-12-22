import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import image from "./assets/background-image.jpg";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ToDoList from "./Pages/ToDoList";
import Color from "./Pages/Color";
import Counter from "./Pages/Counter";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh", 
          width: "100%",
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<ToDoList />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/color" element={<Color />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
