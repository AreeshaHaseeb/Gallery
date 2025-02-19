import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="title-place">
        <h3 className="title">Gallery</h3>
      </div>
      <ul className="navbar-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/todo">ToDoList</Link></li>
        <li><Link to="/counter">Counter</Link></li>
        <li><Link to="/color">Color</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
