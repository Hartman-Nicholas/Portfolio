import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <a href="mailto:hartn001@gmail.com" className="footer__link">
        hartn001@gmail.com
      </a>
      <ul className="social-list">
        <li className="social-list__item">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://stackoverflow.com/users/14505931/nic"
            className="social-list__link"
          >
            <i className="fab fa-stack-overflow"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/nicholas-hartman-86201050/"
            className="social-list__link"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/nich_hart"
            className="social-list__link"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Hartman-Nicholas"
            className="social-list__link"
          >
            <i className="fab fa-github"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
