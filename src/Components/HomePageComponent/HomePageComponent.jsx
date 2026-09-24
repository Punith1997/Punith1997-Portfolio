import React, { useState, useEffect } from "react";
import "../../assets/style/CSS/HomePageComponent/HomePageComponent.css";
import resume from "../../assets/files/resume/Punith_AJ_Resume.pdf";
import homePhoto from "../../assets/files/images/home_photo.jpg";

const HomePageComponent = () => {
  return (
    <>
      <div className="home-page-div">
        <div className="home-page-about">
          <div className="home-page-about-info-div">
            <h1 className="home-page-about-info-text-1">
              {" "}
              Software Engineer +{" "}
            </h1>
            <h1 className="home-page-about-info-text-2"> Data Scientist</h1>
            <p className="home-page-about-info-paragraph-1">
              Software Engineer skilled in using HTML, CSS, JavaScript,
              Bootstrap, React.js, and React Native. Backend proficiency in
              Django, Django REST Framework, and SQL. Experienced in Machine
              Learning, Deep Learning, and Computer Vision with architectures
              such as YOLO, Detectron, UNet, and ResNet. Capable of building
              robust web and mobile applications, integrating advanced AI models
              for enhanced functionality and productivity.
            </p>
            <div className="home-page-about-info-open-resume">
              {/* <span className = "home-page-about-info-open-resume-span">Open Resume</span> */}
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="home-page-about-info-open-resume-span"
              >
                Open Resume
              </a>
            </div>
          </div>
        </div>
        <div className="home-page-photo">
          <div className="home-page-photo-div-1">
            <img
              src={homePhoto}
              alt="Software Engineer and Data Scientist illustration"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageComponent;
