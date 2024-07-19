import React, { useState, useEffect } from "react";
import "../../assets/style/CSS/AboutPageComponent/AboutPageComponent.css";

const AboutPageComponent = () => {
  return (
    <div className="about-page-div">
      <span className="about-page-heading-span">About Me</span>
      <div className="about-page-details-div">
        <div className="about-page-info-div">
          <p>
            I began my development journey in 2017, focusing on design,
            branding, UX/UI, and WordPress. This led to founding my own design
            and development agency in 2018.
          </p>
          <p>
            From 2020, I expanded my skills into programming languages like
            HTML, CSS, JavaScript, Python, C, C++, and C#. To deepen my
            understanding, I completed fundamental computer science courses from
            reputable institutions like Harvard and other online platforms.
          </p>
          <p>
            I further developed my expertise through certifications and courses
            from industry leaders like Meta, IBM, and Google, alongside
            resources like Udemy. I have extensively studied JavaScript and
            React documentation. And i love to read documentations.
          </p>
          <p>
            Currently, I'm passionate about GoLang (especially the Gin
            Framework) and fascinated by the advancements in artificial
            intelligence and its potential for positive impact. I have a strong
            desire and aptitude for continuous learning.
          </p>
          <p>
            I'm a quick learner with a proven track record of achieving
            exceptional frontend performance.
          </p>
        </div>
        <div className="about-page-photo-div">
            <img src="https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg" alt="Bird Image" />
        </div>
      </div>
    </div>
  );
};

export default AboutPageComponent;
