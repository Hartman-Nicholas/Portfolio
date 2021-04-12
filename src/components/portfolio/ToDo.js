import React, { useLayoutEffect } from "react";
import todoHome from "../../img/23_todoHome.png";
import todoSample from "../../img/24_todoSample.png";
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
            ToDo <strong>Tasks-saved</strong>
          </h1>
          <p className="section__subtitle section__subtitle--intro">
            CLI Task Manager Application
          </p>
          <Img
            src={todoHome}
            alt="View page for a CLI application shows a ToDo logo with various command instructions."
            className="intro__img"
          ></Img>
        </section>

        <div className="portfolio-item-individual">
          <p className="portfolio-item-p">
            A Command line interface (CLI) application that allows the user to
            create a ToDo tasks in a list. The ToDo task consists of a Title,
            Description, Project, Due Date and Status. The user can then view,
            modify, and delete a ToDo, they are also able to mark the ToDo as
            complete or incomplete. In the view list menu they will have the
            option to sort by due date, sort by project type, filter by complete
            and incomplete. Once the user has finished entering their tasks they
            are able to save their ToDo list, they will also be able to load a
            previously saved ToDo list and adjust accordingly.
          </p>
          <Img
            className="portfolio-item-img"
            src={todoSample}
            alt="Landing page for a CLI application shows a ToDo logo with various command instructions."
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
            ) Programming InDepth Module where we practised core Java concepts
            such as high cohesion, low coupling, method naming, file
            organisation, abstraction, Java documentation and unit testing. We
            also practised our useage of GIT and Github.
          </p>
          <h3>Some of the Technologies used to create this App.</h3>
          <ul>
            <li>Java</li>
            <li>Maven</li>
            <li>Git and Github</li>
            <li>Draw.io - for UML documentation</li>
          </ul>
        </div>

        <div className="portfolio__nav">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Hartman-Nicholas/ToDo"
            className="btn portfolio__nav-website"
          >
            *To GitHub
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
