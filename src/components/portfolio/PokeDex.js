import React, { useLayoutEffect } from "react";
import pokedexHome from "../../img/8_pokeDexHome.png";
import pokedexSample from "../../img/15_pokedexSample.jpg";
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

const Cupcake = () => {
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
            SDA-9 <strong>PokeDex</strong>
          </h1>
          <p className="section__subtitle section__subtitle--intro">
            Gotta catch 'Em All!
          </p>
          <Img src={pokedexHome} alt="profile" className="intro__img"></Img>
        </section>

        <div className="portfolio-item-individual">
          <p className="portfolio-item-p">
            PokeDex where the user can enter the name of the Pokemon and the
            PokeDex will return key stats for that Pokemon.
          </p>
          <Img
            className="portfolio-item-img"
            src={pokedexSample}
            alt="Computer"
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
            ) Programming in-depth Module where we were practising fetching data
            using axios and async await. I decided to combine this with creating
            a small FrontEnd for the user input, styled with Tailwind CSS, and
            then do the coding using Typescript for practice. Course lead by
            Kwabena Asante-Poku of KTH.
          </p>
          <h3>Some of the Technologies used to create this App.</h3>
          <ul>
            <li>React</li>
            <li>Axios</li>
            <li>TypeScript</li>
            <li>Tailwind</li>
          </ul>
        </div>

        <div className="portfolio__nav">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://hartman-pokedex.herokuapp.com/"
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

export default Cupcake;
