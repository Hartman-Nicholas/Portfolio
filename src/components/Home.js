import React from "react";
import profilePicture from "../img/1_NicProfile.png";
import Img from "../styles/components/img";

const Home = () => {
  return (
    <section className="intro" id="Home">
      <h1 className="section__title section__title--intro">
        Hi, I am <strong>Nic Hartman</strong>
      </h1>
      <p className="section__subtitle section__subtitle--intro">
        Full-Stack dev
      </p>
      <Img src={profilePicture} alt="profile" className="intro__img"></Img>
    </section>
  );
};

export default Home;
