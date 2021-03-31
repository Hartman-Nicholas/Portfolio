import React, { useLayoutEffect } from "react";
import signUp from "../../img/7_signUpHome.png";
import signUp2 from "../../img/19_SignUpSample.png";
import Img from "../../styles/components/img";
import Section from "../../styles/components/Section";
import Header from "../Header";
import Footer from "../Footer";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import lightTheme from "../../styles/themes/lightTheme";
import darkTheme from "../../styles/themes/darkTheme";
import Toggle from "../../styles/components/toggle";
import { HashLink } from "react-router-hash-link";

const SignUp = () => {
  const nav = useSelector((state) => state.nav);
  const theme = useSelector((state) => state.theme);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <Section className={`${nav ? "nav-open" : ""}`}>
        <Toggle />
        <Header />
        <section className="intro">
          <h1 className="section__title section__title--intro">
            SignIn <strong>SignUp</strong>
          </h1>
          <p className="section__subtitle section__subtitle--intro">
            OAuth Login
          </p>
          <Img src={signUp} alt="profile" className="intro__img"></Img>
        </section>

        <div className="portfolio-item-individual">
          <p className="portfolio-item-p">
            The site consists solely of a Login page with OAuthLogin methods for
            Google, linkedIn, Twitter and Facebook. As well as a normal login
            connected to a backend DataBase.
          </p>
          <Img
            className="portfolio-item-img"
            src={signUp2}
            alt="Computer"
          ></Img>
          <p>
            This project I setup myself to practice handling OAuth and User
            Login using passportjs. The FrontEnd design was following a{" "}
            <a
              className="portfolio-item-a"
              href="https://www.youtube.com/watch?v=piG91X4sV2U&t=6s"
              target="_blank"
              rel="noopener noreferrer"
            >
              video
            </a>{" "}
            guide by True Coder, however I had to do major changes to get it
            working with React. (Original video was done in HTML). Currently
            Google OAuth is setup rest to follow.
          </p>
          <h3>Some of the Technologies used to create this App.</h3>
          <ul>
            <li>React and React Transition with CSS for the FrontEnd</li>
            <li>Node, Express, MongoDB for BackEnd</li>
            <li>Passportjs for OAuth</li>
          </ul>
        </div>

        <div className="portfolio__nav">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://hartman-signup.herokuapp.com/"
            className="btn portfolio__nav-website"
          >
            *To Website
          </a>
          <HashLink
            to="/#MyWork"
            smooth={true}
            className="btn portfolio__nav-projects"
          >
            Back to Projects
          </HashLink>
          <p>
            *Node / React Websites are hosted on Heroku and may take a moment to
            load thank you for your patience.
          </p>
        </div>

        <Footer />
      </Section>
    </ThemeProvider>
  );
};

export default SignUp;
