import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import AboutMe from "./AboutMe";
import Home from "./Home";
import MyServices from "./MyServices";
import MyWork from "./MyWork";
import TechStack from "./TechStack";
import Footer from "./Footer";
import Toggle from "../styles/components/toggle";
import Section from "../styles/components/Section";
import { ThemeProvider } from "styled-components";
import lightTheme from "../styles/themes/lightTheme";
import darkTheme from "../styles/themes/darkTheme";

const Landing = () => {
  const nav = useSelector((state) => state.nav);
  const theme = useSelector((state) => state.theme);

  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <Section className={`${nav ? "nav-open" : ""}`}>
        <Toggle />
        <Header />
        <Home />
        <MyServices />
        <AboutMe />
        <MyWork />
        <TechStack />
        <Footer />
      </Section>
    </ThemeProvider>
  );
};

export default Landing;
