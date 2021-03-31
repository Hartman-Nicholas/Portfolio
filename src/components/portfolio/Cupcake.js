import React, { useLayoutEffect } from "react";
import cupcakeHome from "../../img/20_cupcakeHome.jpg";
import cupcakeSample from "../../img/12_cupcakeSample.jpg";
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
            Munamii <strong>Cakey</strong>
          </h1>
          <p className="section__subtitle section__subtitle--intro">
            Cake Heaven
          </p>
          <Img src={cupcakeHome} alt="profile" className="intro__img"></Img>
        </section>

        <div className="portfolio-item-individual">
          <p className="portfolio-item-p">
            Mock proposal for Munamii cake website that sells cup cakes and
            wedding cakes. It has a products page as well as about us page and
            contact us page.
          </p>
          <Img
            className="portfolio-item-img"
            src={cupcakeSample}
            alt="Computer"
          ></Img>
          <p>
            {" "}
            Website developed during the Software Developement Academy (
            <a
              className="portfolio-item-a"
              href="https://www.kth.se/en/itm/sda/software-development-academy-1.841849"
              target="_blank"
              rel="noopener noreferrer"
            >
              SDA
            </a>
            ) FrontEnd Module we where provided with a client scope to follow,
            main objective was for us to learn HTML semantic tags, responsive
            design using a mobile first approach and Native CSS. Course lead by
            Eduardo Alvarez of KTH.
          </p>
          <h3>Some of the Technologies used to create this App.</h3>
          <ul>
            <li>HTML</li>
            <li>CSS with SASS</li>
            <li>JavaScript</li>
          </ul>
        </div>

        <div className="portfolio__nav">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.hartofcode.com/projects/cupcake/"
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
