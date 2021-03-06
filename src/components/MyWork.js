import React from "react";
import Img from "../styles/components/img";
import Project1 from "../img/4_project.png";
import Project2 from "../img/5_project.png";
import Project3 from "../img/6_project.png";
import Project4 from "../img/7_project.png";
import Project5 from "../img/8_project.png";
import Project6 from "../img/9_project.png";
import Project7 from "../img/10_project.png";
import Project8 from "../img/11_project.png";
import Project9 from "../img/12_project.png";
import Project10 from "../img/13_project.png";
import { Link } from "react-router-dom";

const MyWork = () => {
  return (
    <section className="my-work" id="MyWork">
      <h2 className="section__title section__title-work">My Work</h2>
      <p className="section__subtitle section__subtitle--work">
        A selection of my range of work
      </p>

      <div className="portfolio">
        {/* Portfolio item 01 */}
        <Link to="/project/natours" className="portfolio__item">
          <Img src={Project1} alt="" className="portfolio__img"></Img>
        </Link>

        {/* Portfolio item 02 */}
        <a href="/project/nexter" className="portfolio__item">
          <Img src={Project2} alt="" className="portfolio__img"></Img>
        </a>

        {/* Portfolio item 03 */}
        <a href="/project/trillo" className="portfolio__item">
          <Img src={Project3} alt="" className="portfolio__img"></Img>
        </a>

        {/* Portfolio item 04 */}
        <a href="/project/signup" className="portfolio__item">
          <Img src={Project4} alt="" className="portfolio__img"></Img>
        </a>

        {/* Portfolio item 05 */}
        <a href="/project/signup" className="portfolio__item">
          <Img src={Project5} alt="" className="portfolio__img"></Img>
        </a>

        {/* Portfolio item 06 */}
        <a href="/project/signup" className="portfolio__item">
          <Img src={Project6} alt="" className="portfolio__img"></Img>
        </a>

        {/* Portfolio item 07 */}
        <a href="/project/signup" className="portfolio__item">
          <Img src={Project7} alt="" className="portfolio__img"></Img>
        </a>

        {/* Portfolio item 08 */}
        <a href="/project/signup" className="portfolio__item">
          <Img src={Project8} alt="" className="portfolio__img"></Img>
        </a>

        {/* Portfolio item 09 */}
        <a href="/project/signup" className="portfolio__item">
          <Img src={Project9} alt="" className="portfolio__img"></Img>
        </a>

        {/* Portfolio item 10 */}
        <a href="/project/signup" className="portfolio__item">
          <Img src={Project10} alt="" className="portfolio__img"></Img>
        </a>
      </div>
    </section>
  );
};

export default MyWork;
