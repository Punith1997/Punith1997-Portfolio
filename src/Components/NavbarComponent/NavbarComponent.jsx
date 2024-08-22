import React, { useState, useEffect, useRef } from "react";
import "../../assets/style/CSS/NavbarComponent/NavbarComponent.css";
import resume from "../../assets/files/resume/Punith_AJ_Resume.pdf";

const NavbarComponent = ({
  servicesSectionRef,
  isServicesInView,
  aboutSectionRef,
  isAboutInView,
  skillsSectionRef,
  isSkillsInView,
  certificateSectionRef,
  isCertificateInView,
  contactSectionRef,
  isContactInView,
  outsideClickedevent,
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const hamburgericonref = useRef(null);
  const hamburgermenuref = useRef(null);

  const handleHamburgerClick = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  const handleServicesClick = () => {
    servicesSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleAboutClick = () => {
    aboutSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleSkillsClick = () => {
    skillsSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleCertificateClick = () => {
    certificateSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactClick = () => {
    contactSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (
      outsideClickedevent?.target &&
      hamburgericonref?.current &&
      hamburgermenuref?.current &&
      !hamburgericonref?.current?.contains(outsideClickedevent?.target) &&
      !hamburgermenuref?.current?.contains(outsideClickedevent?.target)
    ) {
      handleHamburgerClick();
    }
  }, [outsideClickedevent]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-div">
          <div className="navbar-div-left">
            {isHamburgerOpen ? (
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="navbar-hamburger"
                onClick={handleHamburgerClick}
                // height="1em"
                // width="1em"
                ref={hamburgericonref}
              >
                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
              </svg>
            ) : (
              <svg
                fill="none"
                viewBox="0 0 15 15"
                className="navbar-hamburger"
                onClick={handleHamburgerClick}
                //   height="1em"
                //   width="1em"
                ref={hamburgericonref}
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M1.5 3a.5.5 0 000 1h12a.5.5 0 000-1h-12zM1 7.5a.5.5 0 01.5-.5h12a.5.5 0 010 1h-12a.5.5 0 01-.5-.5zm0 4a.5.5 0 01.5-.5h12a.5.5 0 010 1h-12a.5.5 0 01-.5-.5z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            <h2 className="navbar-heading">{"{ punith.aj.co }"}</h2>
          </div>
          <div className="navbar-div-right">
            {/* <svg
              fill="currentColor"
              viewBox="0 0 16 16"
              className="navbar-theme-changer"
            >
              <path d="M8 11a3 3 0 110-6 3 3 0 010 6zm0 1a4 4 0 100-8 4 4 0 000 8zM8 0a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2A.5.5 0 018 0zm0 13a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2A.5.5 0 018 13zm8-5a.5.5 0 01-.5.5h-2a.5.5 0 010-1h2a.5.5 0 01.5.5zM3 8a.5.5 0 01-.5.5h-2a.5.5 0 010-1h2A.5.5 0 013 8zm10.657-5.657a.5.5 0 010 .707l-1.414 1.415a.5.5 0 11-.707-.708l1.414-1.414a.5.5 0 01.707 0zm-9.193 9.193a.5.5 0 010 .707L3.05 13.657a.5.5 0 01-.707-.707l1.414-1.414a.5.5 0 01.707 0zm9.193 2.121a.5.5 0 01-.707 0l-1.414-1.414a.5.5 0 01.707-.707l1.414 1.414a.5.5 0 010 .707zM4.464 4.465a.5.5 0 01-.707 0L2.343 3.05a.5.5 0 11.707-.707l1.414 1.414a.5.5 0 010 .708z" />
            </svg> */}
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-resume"
            >
              RESUME
            </a>
          </div>
        </div>
        {isHamburgerOpen && (
          <div className="hamburger-menu" ref={hamburgermenuref}>
            <ul className="hamburger-menu-options">
              <li
                className={
                  isServicesInView
                    ? "hamburger-menu-single-option-list-inview"
                    : "hamburger-menu-single-option-list"
                }
                onClick={handleServicesClick}
              >
                <span
                  className={
                    isServicesInView
                      ? "hamburger-menu-single-option-inview-line"
                      : "hamburger-menu-single-option-initial-line"
                  }
                ></span>{" "}
                SERVICES
              </li>
              <li
                className={
                  isAboutInView
                    ? "hamburger-menu-single-option-list-inview"
                    : "hamburger-menu-single-option-list"
                }
                onClick={handleAboutClick}
              >
                <span
                  className={
                    isAboutInView
                      ? "hamburger-menu-single-option-inview-line"
                      : "hamburger-menu-single-option-initial-line"
                  }
                ></span>{" "}
                ABOUT
              </li>
              <li
                className={
                  isSkillsInView
                    ? "hamburger-menu-single-option-list-inview"
                    : "hamburger-menu-single-option-list"
                }
                onClick={handleSkillsClick}
              >
                <span
                  className={
                    isSkillsInView
                      ? "hamburger-menu-single-option-inview-line"
                      : "hamburger-menu-single-option-initial-line"
                  }
                ></span>{" "}
                SKILLS & EXPERIENCE
              </li>
              <li
                className={
                  isCertificateInView
                    ? "hamburger-menu-single-option-list-inview"
                    : "hamburger-menu-single-option-list"
                }
                onClick={handleCertificateClick}
              >
                <span
                  className={
                    isCertificateInView
                      ? "hamburger-menu-single-option-inview-line"
                      : "hamburger-menu-single-option-initial-line"
                  }
                ></span>{" "}
                CERTIFICATE
              </li>
              <li
                className={
                  isContactInView
                    ? "hamburger-menu-single-option-list-inview"
                    : "hamburger-menu-single-option-list"
                }
                onClick={handleContactClick}
              >
                <span
                  className={
                    isContactInView
                      ? "hamburger-menu-single-option-inview-line"
                      : "hamburger-menu-single-option-initial-line"
                  }
                ></span>{" "}
                GET IN TOUCH
              </li>
            </ul>
            <div className="social-icons">
              {/* <i className="fab fa-facebook"></i> */}
              {/* <i className="fab fa-twitter"></i> */}
              <i
                className="fab fa-linkedin"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/punith-aj-aa3801190/",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              ></i>
              {/* <i className="fab fa-instagram"></i> */}
              <i
                className="fab fa-github"
                onClick={() =>
                  window.open(
                    "https://github.com/Punith1997",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              ></i>
            </div>
            <p className="footer-text">Coded by Punith AJ</p>
          </div>
        )}
      </nav>
    </>
  );
};

export default NavbarComponent;
