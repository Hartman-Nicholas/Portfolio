import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Img from "../styles/components/img";
import { ReactComponent as ReactLogo } from "../img/react-2.svg";
import nodeLogoWhite from "../img/nodejs-new-pantone-white.svg";
import nodeLogoBlack from "../img/nodejs-new-pantone-black.svg";
import { ReactComponent as CssLogo } from "../img/css-5.svg";
import { ReactComponent as HtmlLogo } from "../img/HTML5_Logo.svg";
import { ReactComponent as JavascriptLogo } from "../img/javascript-4.svg";
import { ReactComponent as MongodbLogo } from "../img/mongodb.svg";
import { ReactComponent as JavaLogo } from "../img/java-4.svg";
import { ReactComponent as SpringLogo } from "../img/spring-3.svg";
import { ReactComponent as MySQL } from "../img/mysql-5.svg";
import { ReactComponent as Npm } from "../img/npm-2.svg";
import { ReactComponent as Tailwind } from "../img/tailwind-css-1.svg";
import { ReactComponent as Next } from "../img/nextjs-3.svg";

const TechStack = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <section className="my-techStack" id="TechStack">
      <h2 className="section__title section__title--techStack">Tech-Stack</h2>
      <div className="techStack">
        <ReactLogo className="techStack__svg" />
        <Img
          className="techStack__svg"
          src={theme ? nodeLogoBlack : nodeLogoWhite}
          alt="profile"
        ></Img>
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
        <JavaLogo
          fill={theme ? "#e76f00" : "#f8f9fa"}
          className="techStack__svg"
        />
        <SpringLogo className="techStack__svg" />
        <MySQL
          fill={theme ? "#f8f9fa" : "#303030"}
          className="techStack__svg"
        />
        <Npm className="techStack__svg" />
        <Tailwind
          fill={theme ? "#f8f9fa" : "#252a2f"}
          className="techStack__svg"
        />
        <Next fill={theme ? "#f8f9fa" : "#303030"} className="techStack__svg" />
      </div>
      <Link to="/certs/certs" smooth="true" className="btn margin_top_3">
        Certificates
      </Link>
    </section>
  );
};

export default TechStack;
