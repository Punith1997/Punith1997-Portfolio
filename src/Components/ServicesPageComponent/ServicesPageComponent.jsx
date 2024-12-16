import React, { useState, useEffect } from "react";
import "../../assets/style/CSS/ServicesPageComponent/ServicesPageComponent.css";

const ServicesPageComponent = () => {
  return (
    <div className="services-page-div">
      <span className="services-page-heading-span">Services I Provide</span>
      <p className="services-page-paragraph">
        With over 2 years of experience in software engineering and data science,
        I have developed AI-integrated web applications that significantly boost
        productivity. I have worked with advanced computer vision and deep
        learning models, built robust web and mobile applications, and delivered
        exceptional results in AI-driven defect analysis for electric power
        systems.
      </p>
      <div className="services-page-cards-div">
        <div className="services-page-single-card-div">
          <i className="fab fa-react"></i>
          <span className="services-page-single-card-div-span">
            Frontend Development
          </span>
          <p>
            I can create fully responsive and modern interfaces using HTML, CSS,
            Bootstrap, JavaScript, and ReactJS, ensuring a seamless user
            experience across all devices.
          </p>
        </div>
        <div className="services-page-single-card-div">
          <i className="fab fa-python"></i>
          <span className="services-page-single-card-div-span">
            Backend Development
          </span>
          <p>
            I can build robust and scalable backend solutions using Django and
            Django Rest Framework, providing secure and efficient server-side
            functionality.
          </p>
        </div>
        <div className="services-page-single-card-div">
          <i className="fas fa-code"></i>
          <span className="services-page-single-card-div-span">
            Templating and Scripting
          </span>
          <p>
            I can integrate Jinja 2 templating for creating dynamic web
            applications with efficient and maintainable code.
          </p>
        </div>
        <div className="services-page-single-card-div">
          <i className="fas fa-mobile"></i>
          <span className="services-page-single-card-div-span">
            Mobile Application Development
          </span>
          <p>
            I can develop cross-platform mobile applications using React Native,
            offering a consistent user experience on both iOS and Android
            devices.
          </p>
        </div>
        <div className="services-page-single-card-div">
          <i className="fas fa-brain"></i>
          <span className="services-page-single-card-div-span">
            AI and Machine Learning
          </span>
          <p>
            I can implement advanced computer vision solutions, leveraging
            artificial intelligence for applications such as object detection,
            segmentation, and defect analysis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPageComponent;
