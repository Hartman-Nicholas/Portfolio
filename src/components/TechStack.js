import React from "react";
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
          fill={theme ? "black" : "#fff"}
          className="techStack__svg"
        />
        <CssLogo fill={theme ? "black" : "#fff"} className="techStack__svg" />
        <HtmlLogo fill={theme ? "black" : "#fff"} className="techStack__svg" />
        <JavascriptLogo
          fill={theme ? "black" : "#fff"}
          className="techStack__svg"
        />
        <JavaLogo
          fill={theme ? "#e76f00" : "#fff"}
          className="techStack__svg"
        />
        <SpringLogo className="techStack__svg" />
        <MySQL fill={theme ? "#fff" : "#303030"} className="techStack__svg" />
      </div>
    </section>
  );
};

export default TechStack;
