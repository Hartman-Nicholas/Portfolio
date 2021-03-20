import React, { useLayoutEffect } from "react";
import signUp from "../../img/6_project.png";
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

const Emaily = () => {
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
          <Img src={signUp} alt="profile" className="intro__img"></Img>
        </section>

        <div className="portfolio-item-individual">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Img src={signUp} alt="Computer"></Img>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="portfolio__nav">
          <a
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

export default Emaily;
