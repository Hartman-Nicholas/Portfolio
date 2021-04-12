import React, { useLayoutEffect } from "react";
import packagerHome from "../../img/21_packagerHome.jpg";
import packagerSample from "../../img/22_packagerSample.jpg";
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

const ChatApp = () => {
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
            Packager <strong>Delivery Tracking</strong>
          </h1>
          <p className="section__subtitle section__subtitle--intro">
            Your Delivery Partner
          </p>
          <Img src={packagerHome} alt="profile" className="intro__img"></Img>
        </section>

        <div className="portfolio-item-individual">
          <p className="portfolio-item-p">
            Mock proposal for Packager website a packaging company that allows
            its users to login and view their packages and the packages
            progress. It has live tracking with a web map and also a world view
            to show where all the packages currently are.
          </p>
          <Img
            className="portfolio-item-img"
            src={packagerSample}
            alt="Landing page for packager a man standing with some boxes a light grey background and a blue header."
          ></Img>
          <p>
            {" "}
            Website developed during the Software Development Academy (
            <a
              className="portfolio-item-a"
              href="https://www.kth.se/en/itm/sda/software-development-academy-1.841849"
              target="_blank"
              rel="noopener noreferrer"
            >
              SDA
            </a>
            ) FrontEnd Module where we were provided with a client scope to
            follow, main objective was for us to practice Reactjs, fetching API
            data, mobile first development and CSS styling. As I had practiced
            react in the past I used the opportunity to also implement a
            language switching feature which was an extra feature requested in
            the project. I also added in the google maps API as an extra.
          </p>
          <h3>Some of the Technologies used to create this App.</h3>
          <ul>
            <li>Reactjs</li>
            <li>Typescript</li>
            <li>React-router-dom</li>
            <li>CSS with SASS</li>
            <li>Axios</li>
          </ul>
        </div>

        <div className="portfolio__nav">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://hartman-packager.web.app/"
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

export default ChatApp;
