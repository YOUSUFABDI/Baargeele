import logImg from "../images/Baargeelle.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg nav">
      <Link to="/" className="logo">
        <img src={logImg} alt="logo" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link links">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link links">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/sign" className="nav-link sign-in">
              Sign in
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
