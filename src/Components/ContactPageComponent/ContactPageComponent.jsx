import React, { useState, useEffect } from "react";
import "../../assets/style/CSS/ContactPageComponent/ContactPageComponent.css";

const ContactPageComponent = () => {
  return (
    <div className="contact-page-div">
      <div className="contact-page-content-div">
        <span className="contact-page-heading-span">GET IN TOUCH</span>
        <p className="contact-page-info-paragraph">
          I'm eager to join a collaborative team where I can contribute my
          skills and learn from others. If you have an exciting project, let's
          discuss how I can be a valuable asset. I'm actively seeking a new
          opportunity to apply my skills and continue growing!
        </p>
        <div className="contact-page-hello-button-div">
          <span className="contact-page-hello-button-span">Say Hello</span>
        </div>

        <div className="contact-page-social-icons">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-github"></i>
        </div>

        <p>
          Designed and Coded by <span onClick={() => window.open("https://www.linkedin.com/in/punith-aj-aa3801190/", "_blank")}>Punith AJ</span> . Built with React and Nextjs,
          Module CSS and Framer Motion, Deployed with Vercel.
        </p>
      </div>
    </div>
  );
};

export default ContactPageComponent;
