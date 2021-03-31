import React, { useLayoutEffect } from "react";
import { ReactComponent as Udemy } from "../../img/udemy-official.svg";
import { ReactComponent as LinkedIn } from "../../img/linkedin-learning-2.svg";
import study from "../../img/undraw_Study.svg";

import Section from "../../styles/components/Section";
import Header from "../Header";
import Footer from "../Footer";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import lightTheme from "../../styles/themes/lightTheme";
import darkTheme from "../../styles/themes/darkTheme";
import Toggle from "../../styles/components/toggle";
import { HashLink } from "react-router-hash-link";

import CertsCardLink from "./CertsCardLink";
import CertsCardUdemy from "./CertsCardUdemy";
import * as udemy from "../infoObjects/CertsInfoUdemy";
import * as linkedIn from "../infoObjects/CertsInfoLinkedin";

const Certs = () => {
  const nav = useSelector((state) => state.nav);
  const theme = useSelector((state) => state.theme);

  const renderUdemyCert = () => {
    const certs = udemy.udemy.map((value) => {
      return (
        <CertsCardUdemy
          key={value.id}
          className="section__cert--card"
          info={value}
        />
      );
    });
    return certs;
  };

  const renderLinkedinCert = () => {
    const certs = linkedIn.linkedIn.map((value) => {
      return (
        <CertsCardLink
          key={value.id}
          className="section__cert--card"
          info={value}
        />
      );
    });
    return certs;
  };

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
            Self-Study <strong>of my project</strong>
          </h1>
          <p className="section__cert--heading">Certifications</p>
          <img src={study} alt="profile" className="section__cert--img"></img>
        </section>

        <div className="section__cert">
          <Udemy
            className="section__cert--title"
            alt="udemy logo"
            fill={theme ? "#fff" : "#645a53"}
          />

          <div className="certPortfolio">{renderUdemyCert()}</div>

          <div>
            <LinkedIn
              className="section__cert--title"
              alt="linkedIn logo"
              fill={theme ? "#252a2f" : "#fff"}
            />

            <div className="certPortfolio">{renderLinkedinCert()}</div>
          </div>
          <HashLink
            to="/#TechStack"
            smooth={true}
            className="btn portfolio__nav-projects section__cert--button"
          >
            Back to Tech Stack
          </HashLink>
        </div>

        <Footer />
      </Section>
    </ThemeProvider>
  );
};

export default Certs;
