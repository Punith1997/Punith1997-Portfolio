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
              Frontend Engineer +{" "}
            </h1>
            <h1 className="home-page-about-info-text-2">
              {" "}
              Full-stack Developer
            </h1>
            <p className="home-page-about-info-paragraph-1">
              Frontend Engineer using HTML, CSS, JavaScript, TypeScript, React,
              and Nextjs. Backend using Node, .NET Core, Express, SQL, Postgres
              & Prisma and Deploy. can assist to build robust web, mobile, and
              desktop applications.
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
            <img src="https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg" alt="Bird Image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageComponent;
