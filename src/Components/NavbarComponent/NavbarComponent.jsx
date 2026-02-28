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
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const hamburgericonref = useRef(null);
  const hamburgermenuref = useRef(null);

  const handleHamburgerClick = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  const handleScrollTo = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // Detect clicks outside menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        hamburgermenuref.current &&
        !hamburgermenuref.current.contains(event.target) &&
        hamburgericonref.current &&
        !hamburgericonref.current.contains(event.target)
      ) {
        setIsHamburgerOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-div">
        <div className="navbar-div-left">
          {isHamburgerOpen ? (
            <svg
              viewBox="0 0 24 24"
              className={`navbar-hamburger ${isHamburgerOpen ? "opened" : ""}`}
              onClick={handleHamburgerClick}
              ref={hamburgericonref}
              style={{ pointerEvents: 'none' }}  // KEY FIX!
            >
              <g style={{ pointerEvents: 'none' }}>
                <line x1="4" y1="4" x2="20" y2="20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                <line x1="20" y1="4" x2="4" y2="20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </g>
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="navbar-hamburger"
              onClick={handleHamburgerClick}
              ref={hamburgericonref}
              style={{ pointerEvents: 'none' }}  // KEY FIX!
            >
              <g style={{ pointerEvents: 'none' }}>
                <rect x="0" y="0" width="100%" height="3" fill="currentColor" rx="1.5" />
                <rect x="0" y="10" width="100%" height="3" fill="currentColor" rx="1.5" />
                <rect x="0" y="20" width="100%" height="3" fill="currentColor" rx="1.5" />
              </g>
            </svg>
          )}

          <h2 className="navbar-heading">{"{ punith.aj.co }"}</h2>
        </div>

        <div className="navbar-div-right">
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
              onClick={() => handleScrollTo(servicesSectionRef)}
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
              onClick={() => handleScrollTo(aboutSectionRef)}
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
              onClick={() => handleScrollTo(skillsSectionRef)}
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
              onClick={() => handleScrollTo(certificateSectionRef)}
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
              onClick={() => handleScrollTo(contactSectionRef)}
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
  );
};

export default NavbarComponent;