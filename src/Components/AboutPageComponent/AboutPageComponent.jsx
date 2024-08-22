import React, { useState, useEffect } from "react";
import "../../assets/style/CSS/AboutPageComponent/AboutPageComponent.css";

const AboutPageComponent = () => {
  return (
    <div className="about-page-div">
      <span className="about-page-heading-span">About Me</span>
      <div className="about-page-details-div">
        <div className="about-page-info-div">
          <p>
            I began my development journey in 2021, focusing on software
            engineering and data science. This led to gaining experience with
            advanced AI models, semantic segmentation, and object detection.
          </p>
          <p>
            From 2022, I expanded my skills into frontend and backend
            development, mastering technologies like HTML, CSS, JavaScript,
            Bootstrap, React.js, Django, and SQL. To deepen my understanding, I
            completed a Full Stack Data Science certification from iNeuron and
            pursued various online courses.
          </p>
          <p>
            I further developed my expertise through hands-on projects at
            Compviz Technologies, integrating AI into web applications, and
            delivering impactful results. I have extensively studied machine
            learning and computer vision documentation, constantly seeking to
            improve my knowledge and skills.
          </p>
          <p>
            Currently, I'm passionate about advancements in artificial
            intelligence and its potential for positive impact. I have a strong
            desire and aptitude for continuous learning.
          </p>
          <p>
            I'm a quick learner with a proven track record of achieving
            exceptional results in software development and AI-driven solutions.
          </p>
        </div>
        <div className="about-page-photo-div">
          <img
            // src="https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg"
            src="https://t3.ftcdn.net/jpg/02/14/46/92/360_F_214469252_kZ1U54ZrDTNrrjj0fCciCaYoFbyQNK3y.jpg"
            alt="Bird Image"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPageComponent;
