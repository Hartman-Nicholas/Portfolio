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
          Grew up in Sunny South Africa in a small community just outside of
          Durban, where I spent most of my days between my love of Squash and
          outdoors with my friends. In 2011 moved up to Johannesburg where I
          honed my business skills and understanding.
        </p>
        <p>
          With the birth of my son and daughter there was shift in priorities
          and it was off to Stockholm for a safer and more relaxed lifestyle.
          During this time I rediscovered my love for technology and have been
          completely taken in with the developer life style.
        </p>
      </div>

      <Img src={ImgAboutMe} alt="Me Standing" className="about-me__img"></Img>
    </section>
  );
};

export default AboutMe;
