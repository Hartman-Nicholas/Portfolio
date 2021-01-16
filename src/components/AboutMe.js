import React from "react";
import ImgAboutMe from "../img/3_img.png";
import Img from "../styles/components/img";

const AboutMe = () => {
  return (
    <section className="about-me" id="AboutMe">
      <h2 className="section__title section__title--about">Who I am</h2>
      <p className="section__subtitle section__subtitle--about">
        Full-Stack developer based out of Stockholm
      </p>

      <div className="about-me__body">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      <Img src={ImgAboutMe} alt="Me Standing" className="about-me__img"></Img>
    </section>
  );
};

export default AboutMe;
