import React from "react";
import Img from "../styles/components/img";
import * as myWork from "../components/infoObjects/MyWorkInfo";

const MyWork = () => {
  const renderWorkList = () => {
    const workPortfolio = myWork.myWork.map((value) => {
      return (
        <a key={value.id} href={value.link} className="portfolio__item">
          <Img src={value.img} alt={value.alt} className="portfolio__img"></Img>
        </a>
      );
    });
    return workPortfolio;
  };

  return (
    <section className="my-work" id="MyWork">
      <h2 className="section__title section__title-work">My Work</h2>
      <p className="section__subtitle section__subtitle--work">
        A selection of my range of work
      </p>
      <div className="portfolio">{renderWorkList()}</div>
    </section>
  );
};

export default MyWork;
