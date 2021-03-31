import React, { useLayoutEffect } from "react";
import natoursHome from "../../img/4_natoursHome.png";
import natoursSample from "../../img/16_natoursSample.png";
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

const Natours = () => {
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
            Natours <strong>Outdoors</strong>
          </h1>
          <p className="section__subtitle section__subtitle--intro">
            Where life happens
          </p>
          <Img src={natoursHome} alt="profile" className="intro__img"></Img>
        </section>

        <div className="portfolio-item-individual">
          <p className="portfolio-item-p">
            Mock up of an outdoor adventure tour group website, where users can
            select the tour that suits their Adventure needs.
          </p>
          <Img
            className="portfolio-item-img"
            src={natoursSample}
            alt="Computer"
          ></Img>
          <p>
            The App was developed following Jonas Schmedtmann's course on
            Advanced CSS and Sass: Flexbox, Grid, Animations and More on{" "}
            <a
              className="portfolio-item-a"
              href="https://www.udemy.com/course/advanced-css-and-sass/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Udemy.
            </a>{" "}
            Jonas builds this webpage using floats and I refactored it to use
            CSS Grid and Flexbox technology.
          </p>
          <h3>Some of the Technologies used to create this App.</h3>
          <ul>
            <li>HTML, and CSS with SASS</li>
            <li>NPM</li>
            <li>Responsive Images</li>
            <li>Media Queries</li>
            <li>CSS Grid and Flexbox</li>
          </ul>
        </div>

        <div className="portfolio__nav">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.hartofcode.com/projects/natours/"
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

export default Natours;
