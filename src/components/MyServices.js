import React from "react";
import { HashLink } from "react-router-hash-link";

const MyServices = () => {
  return (
    <section className="my-services" id="MyServices">
      <h2 className="section__title section__title--services">What I do</h2>
      <div className="services">
        <div className="service">
          <h3>Design + Development</h3>
          <p>
            Clean Website design using the latest React.js techniques and CSS
            libraries combined with native CSS and SASS. Bringing a clean
            functional design that speaks to key business requirements.
          </p>
        </div>
        <div className="service">
          <h3>Microservices</h3>
          <p>
            Designing using Microservice architecture which enables the rapid,
            frequent and reliable delivery of large, complex applications. It
            also enables an organization to evolve its technology stack.
          </p>
        </div>
        <div className="service">
          <h3>BackEnd</h3>
          <p>
            Fast and reliable backends using either Node.js with express,
            graphql, and axios connected to a Mongodb database, or Java spring
            boot connected to a mySQL database for your application
            requirements.
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
