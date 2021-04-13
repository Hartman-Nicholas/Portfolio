import React from "react";
import { HashLink } from "react-router-hash-link";

const MyServices = () => {
  return (
    <section className="my-services" id="MyServices">
      <h2 className="section__title section__title--services">What I do</h2>
      <div className="services">
        <div className="service">
          <h3>FrontEnd</h3>
          <p>
            Clean Website design using the latest React.js techniques functional
            programming and CSS libraries combined with native CSS and SASS.
            Bringing a clean functional design that speaks to key business
            requirements.
          </p>
        </div>
        <div className="service">
          <h3>Code Style</h3>
          <p>
            Following the key principles of Java and object oriented
            programming, I am always looking to produce well structured code
            with low cohesion and high coupling. My enjoyment of strong typed
            languages has translated easily into a passion for Typescript.
          </p>
        </div>
        <div className="service">
          <h3>BackEnd</h3>
          <p>
            Fast and reliable backends using Node.js with express, and axios
            connected to a Mongodb database. I have also started learning Java
            spring boot Hibernate connected to a PostgreSQL database.
          </p>
        </div>
      </div>
      <HashLink to="#MyWork" smooth={true} className="btn">
        My Work
      </HashLink>
    </section>
  );
};

export default MyServices;
