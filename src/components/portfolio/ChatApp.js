import React, { useLayoutEffect } from "react";
import chatappHome from "../../img/13_chatappHome.jpg";
import chatappSample from "../../img/14_chatappSample.jpg";
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
            ChatApp <strong>Sockets.io</strong>
          </h1>
          <p className="section__subtitle section__subtitle--intro">
            The Next WhatsApp
          </p>
          <Img src={chatappHome} alt="profile" className="intro__img"></Img>
        </section>

        <div className="portfolio-item-individual">
          <p className="portfolio-item-p">
            User provides a user name and room that they want to Join. They can
            chat in real time with other users in the room as well as provide
            their Location information. Other users in the room are notified
            when a new user joins or if someone leaves.
          </p>
          <Img
            className="portfolio-item-img"
            src={chatappSample}
            alt="Computer"
          ></Img>
          <p>
            The App was developed following Andrew Mead's course The complete
            Node.js Developer Course on{" "}
            <a
              className="portfolio-item-a"
              href="https://www.udemy.com/course/the-complete-nodejs-developer-course-2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Udemy.
            </a>{" "}
          </p>
          <h3>Some of the Technologies used to create this App.</h3>
          <ul>
            <li>Node, WebSockets</li>
            <li>CSS</li>
            <li>HandleBars</li>
          </ul>
        </div>

        <div className="portfolio__nav">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://nhartman-chat-app.herokuapp.com/"
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
