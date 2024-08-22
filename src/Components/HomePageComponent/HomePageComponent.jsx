import React, { useState, useEffect } from "react";
import "../../assets/style/CSS/HomePageComponent/HomePageComponent.css";
import resume from "../../assets/files/resume/Punith_AJ_Resume.pdf";

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
              such as YOLO, Detectron, UNet, and ResNet34. Capable of building
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
              // src="https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg"
              // src="https://media.istockphoto.com/id/1452604857/photo/businessman-touching-the-brain-working-of-artificial-intelligence-automation-predictive.jpg?s=612x612&w=0&k=20&c=GkAOxzduJbUKpS2-LX_l6jSKtyhdKlnPMo2ito4xpR4="
              src="https://etimg.etb2bimg.com/photo/99959880.cms"
              alt="Bird Image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageComponent;
