import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { HashLink } from "react-router-hash-link";
import { updateNavState } from "./store/actions/index";

const Header = () => {
  const dispatch = useDispatch();
  const nav = useSelector((state) => state.nav);

  return (
    <div className="header">
      <button
        onClick={() =>
          nav ? dispatch(updateNavState(false)) : dispatch(updateNavState(true))
        }
        className="nav-toggle"
        aria-label="toggle navigation"
      >
        <span className="hamburger"></span>
      </button>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <HashLink
              className="nav__link"
              to="/#Home"
              smooth={true}
              onClick={() => dispatch(updateNavState(false))}
            >
              Home
            </HashLink>
          </li>
          <li className="nav__item">
            <HashLink
              className="nav__link"
              to="/#MyServices"
              smooth={true}
              onClick={() => dispatch(updateNavState(false))}
            >
              My Services
            </HashLink>
          </li>
          <li className="nav__item">
            <HashLink
              className="nav__link"
              to="/#AboutMe"
              smooth={true}
              onClick={() => dispatch(updateNavState(false))}
            >
              About Me
            </HashLink>
          </li>
          <li className="nav__item">
            <HashLink
              className="nav__link"
              to="/#MyWork"
              smooth={true}
              onClick={() => dispatch(updateNavState(false))}
            >
              My Work
            </HashLink>
          </li>
          <li className="nav__item">
            <HashLink
              className="nav__link"
              to="/#TechStack"
              smooth={true}
              onClick={() => dispatch(updateNavState(false))}
            >
              Tech-Stack
            </HashLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
