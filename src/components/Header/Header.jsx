import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./header.css";
import { useLocalData } from "../../DataContext";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const { islogin, setIslogin } = useLocalData();
  const navigate = useNavigate();

  setIslogin(localStorage.getItem("isLogin"));
  if (localStorage.getItem("isLogin") == null) {
    localStorage.setItem("isLogin", "false");
  }

  return (
    <div className="navbar-container container">
      <Link to="/" className="navbar-logo">
        Baargeelle
      </Link>
      <div className="menu-icon" onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              "nav-links" + (isActive ? " activated" : "")
            }
            onClick={closeMobileMenu}
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/download"
            className={({ isActive }) =>
              "nav-links" + (isActive ? " activated" : "")
            }
            onClick={closeMobileMenu}
          >
            Download
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              "nav-links" + (isActive ? " activated" : "")
            }
            onClick={closeMobileMenu}
          >
            Contact us
          </NavLink>
        </li>
        {islogin === "true" ? (
          <li className="nav-item">
            <NavLink
              to={"/profile"}
              className={({ isActive }) =>
                "nav-links" + (isActive ? " activated" : "")
              }
              onClick={() => {
                closeMobileMenu();
              }}
            >
              <FaUserCircle size={40} />
            </NavLink>
          </li>
        ) : (
          <>
            <li className="nav-item">
              <NavLink
                to="/sign"
                className={({ isActive }) =>
                  "nav-links-btn" + (isActive ? " active-btn" : "")
                }
                id="sign__btn"
                onClick={closeMobileMenu}
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  "nav-links" + (isActive ? " activated" : "")
                }
                id="create__acc__btn"
                onClick={closeMobileMenu}
              >
                Create account
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Header;
