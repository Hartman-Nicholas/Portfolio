import React, { useLayoutEffect } from "react";
import emailyHome from "../../img/09_EmailyHome.jpg";
import emailySample from "../../img/10_EmailySample.jpg";
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
            Emaily <strong>Surveys</strong>
          </h1>
          <p className="section__subtitle section__subtitle--intro">
            Your survey partner.
          </p>
          <Img src={emailyHome} alt="profile" className="intro__img"></Img>
        </section>

        <div className="portfolio-item-individual">
          <p className="portfolio-item-p">
            This app allows the user to create email surveys that can be sent
            out to a list of recipients, the recipients can then complete the
            survey and the responses from the survey are displayed on the user
            dashboard.
          </p>
          <Img
            className="portfolio-item-img"
            src={emailySample}
            alt="Computer"
          ></Img>
          <p>
            The App was developed following Stephen Grider's Node with React:
            Fullstack Web Development course on{" "}
            <a
              className="portfolio-item-a"
              href="https://www.udemy.com/course/node-with-react-fullstack-web-development/"
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
            href="https://hartman-emaily.herokuapp.com/"
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
