import React from "react";
import ImgAboutMe from "../img/3_NicAndChildren.jpg";
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
          Grew up in Durban South Africa, where you would find me either
          outdoors, on the squash court or in-front of a computer. In 2011 moved
          up to SA's business hub Johannesburg where I developed my business and
          sales skills.
        </p>
        <p>
          With the birth of my son and daughter there was shift in priorities
          and stable long term goals became a priority. Stockholm Sweden offered
          everything we where looking for and we jumped at the opportunity to
          move. Since the move I have rediscovered my love for technology and
          have been completely taken in with the developer life style.
        </p>
      </div>

      <Img src={ImgAboutMe} alt="Me Standing" className="about-me__img"></Img>
    </section>
  );
};

export default AboutMe;
