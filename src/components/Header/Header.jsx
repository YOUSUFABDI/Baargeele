import { useState } from "react";
import { Link } from "react-router-dom";
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

  // console.log(islogin);

  setIslogin(localStorage.getItem("isLogin"));
  if (localStorage.getItem("isLogin") == null) {
    localStorage.setItem("isLogin", "false");
  }

  const signOut = () => {
    setIslogin(localStorage.getItem("isLogin"));
    if (localStorage.getItem("isLogin") == null) {
      localStorage.setItem("isLogin", "false");
    } else {
      localStorage.setItem("isLogin", "false")
      setIslogin(localStorage.getItem("isLogin"));
    }
  };

  // const { handleSubmit } = useForm();

  // setIslogin(localStorage.getItem("isLogin"));
  // if (localStorage.getItem("isLogin") == null) {
  //   localStorage.setItem("isLogin", "false");
  // } else {
  //   setIslogin(localStorage.setItem("isLogin", "true"));
  // }

  return (
    <div className="navbar-container container">
      <Link to="/" className="navbar-logo">
        Baargeele
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
            Contact
          </NavLink>
        </li>
        <li className="nav-item">
          {islogin === "true" ? (
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                "nav-links" + (isActive ? " activated" : "")
              }
              onClick={() => {
                closeMobileMenu;
                // signOut();
              }}
            >
              {/* Profile */}
              <FaUserCircle size={40} />
            </NavLink>
          ) : (
            <NavLink
              to="/sign"
              className={({ isActive }) =>
                "nav-links-btn" + (isActive ? " active-btn" : "")
              }
              id="sign__btn"
              onClick={closeMobileMenu}
            >
              Sign in
            </NavLink>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Header;
