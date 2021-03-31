import React, { useLayoutEffect } from "react";
import trilloHome from "../../img/6_trilloHome.png";
import trilloSample from "../../img/17_trilloSample.png";
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

const Trillo = () => {
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
            The title <strong>of my project</strong>
          </h1>
          <p className="section__subtitle section__subtitle--intro">SignUp</p>
          <Img src={trilloHome} alt="profile" className="intro__img"></Img>
        </section>

        <div className="portfolio-item-individual">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Img
            className="portfolio-item-img"
            src={trilloSample}
            alt="Computer"
          ></Img>
          <p>
            The App was developed following Stephen Grider's Node with React:
            Fullstack Web Development course on{" "}
            <a
              className="portfolio-item-a"
              href="https://www.udemy.com/course/node-with-react-fullstack-web-development/s"
              target="_blank"
              rel="noopener noreferrer"
            >
              Udemy.
            </a>{" "}
            However the styling was completely redone by myself using native CSS
            and SASS. I also used Final Form instead of Redux Form.
          </p>
          <h3>Some of the Technologies used to create this App.</h3>
          <ul>
            <li>React, Redux, CSS with SASS for FrontEnd</li>
            <li>Node, Express, MongoDB for BackEnd</li>
            <li>Stripe for processing payments</li>
            <li>Google OAuth for Authentication</li>
          </ul>
        </div>

        <div className="portfolio__nav">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.hartofcode.com/projects/trillo/"
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

export default Trillo;
