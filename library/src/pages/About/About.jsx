import React from "react";
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
        </div>

        <div className="about-content grid">
          <div className="about-img">
            <img src={aboutImg} alt="" />
          </div>
          <div className="about-text">
            <h2 className="about-title fs-26 ls-1">About Open_Library</h2>
            <p className="fs-17">
              A section on a web library typically refers to a specific area
              dedicated to a particular type of resource or subject matter. For
              example, a web library might have sections for e-books, academic
              journals, multimedia content, and specialized databases. Each
              section is designed to help users efficiently locate and access
              the materials they need. These sections often include advanced
              search and filtering options, allowing users to narrow down their
              searches by criteria such as publication date, author, or topic.
              Additionally, sections may provide curated collections or
              recommendations, helping users discover related materials and
              expand their research. By organizing content into distinct
              sections, web libraries enhance usability and make it easier for
              users to find and utilize the vast array of resources available.
            </p>
            <p className="fs-17">
              Open Library is a non-profit, public domain, and open-access
              repository of books, including fiction, non-fiction, biographies,
              and reference works. It is developed and maintained by the Library
              of Congress. The goal of Open Library is to provide a
              comprehensive, freely accessible, and sustainable collection of
              books, including all versions, editions, and translations.
            </p>

            <h2> Made by &#9829; Javed Hussain</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
