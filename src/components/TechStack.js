import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ReactComponent as ReactLogo } from "../img/react-2.svg";
import nodeLogoWhite from "../img/nodejs-new-pantone-white.svg";
import nodeLogoBlack from "../img/nodejs-new-pantone-black.svg";
import { ReactComponent as CssLogo } from "../img/css-5.svg";
import { ReactComponent as HtmlLogo } from "../img/HTML5_Logo.svg";
import { ReactComponent as JavascriptLogo } from "../img/javascript-4.svg";
import { ReactComponent as MongodbLogo } from "../img/mongodb.svg";
import { ReactComponent as JavaLogo } from "../img/java-4.svg";
// import { ReactComponent as SpringLogo } from "../img/spring-3.svg";
// import { ReactComponent as MySQLLogo } from "../img/mysql-5.svg";
import { ReactComponent as NpmLogo } from "../img/npm-2.svg";
import typeScriptLogo from "../img/typescript-programming-language.svg";

// import { ReactComponent as TailwindLogo } from "../img/tailwind-css-1.svg";
// import { ReactComponent as NextLogo } from "../img/nextjs-3.svg";
import sassLogo from "../img/sass.png";

const TechStack = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <section className="my-techStack" id="TechStack">
      <h2 className="section__title section__title--techStack">Tech-Stack</h2>
      <div className="techStack">
        <ReactLogo className="techStack__svg" />
        <img
          className="techStack__svg"
          src={theme ? nodeLogoBlack : nodeLogoWhite}
          alt="logo for node.js"
        ></img>
        <MongodbLogo
          fill={theme ? "black" : "#f8f9fa"}
          className="techStack__svg"
        />
        <CssLogo
          fill={theme ? "black" : "#f8f9fa"}
          className="techStack__svg"
        />
        <HtmlLogo
          fill={theme ? "black" : "#f8f9fa"}
          className="techStack__svg"
        />
        <JavascriptLogo
          fill={theme ? "black" : "#f8f9fa"}
          className="techStack__svg"
        />
        <img
          className="techStack__svg"
          src={typeScriptLogo}
          alt="logo for sass compiler"
        ></img>
        <img
          className="techStack__svg"
          src={sassLogo}
          alt="logo for sass compiler"
        ></img>
        <JavaLogo
          fill={theme ? "#e76f00" : "#f8f9fa"}
          className="techStack__svg"
        />
        {/* <SpringLogo className="techStack__svg" /> */}
        {/* <MySQLLogo
          fill={theme ? "#f8f9fa" : "#303030"}
          className="techStack__svg"
        /> */}
        <NpmLogo className="techStack__svg" />
        {/* <Tailwind
          fill={theme ? "#f8f9fa" : "#252a2f"}
          className="techStack__svg"
        />
        <Next fill={theme ? "#f8f9fa" : "#303030"} className="techStack__svg" /> */}
      </div>
      <Link to="/certs/certs" smooth="true" className="btn margin_top_3">
        Certificates
      </Link>
    </section>
  );
};

export default TechStack;
