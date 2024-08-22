// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'

// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <>
// //       <div>
// //         <a href="https://vitejs.dev" target="_blank">
// //           <img src={viteLogo} className="logo" alt="Vite logo" />
// //         </a>
// //         <a href="https://react.dev" target="_blank">
// //           <img src={reactLogo} className="logo react" alt="React logo" />
// //         </a>
// //       </div>
// //       <h1>Vite + React</h1>
// //       <div className="card">
// //         <button onClick={() => setCount((count) => count + 1)}>
// //           count is {count}
// //         </button>
// //         <p>
// //           Edit <code>src/App.jsx</code> and save to test HMR
// //         </p>
// //       </div>
// //       <p className="read-the-docs">
// //         Click on the Vite and React logos to learn more
// //       </p>
// //     </>
// //   )
// // }

// // export default App

// import React, { useState, useEffect, useRef } from "react";

// import NavbarComponent from "./Components/NavbarComponent/NavbarComponent";
// import HomePageComponent from "./Components/HomePageComponent/HomePageComponent";
// import ServicesPageComponent from "./Components/ServicesPageComponent/ServicesPageComponent";
// import AboutPageComponent from "./Components/AboutPageComponent/AboutPageComponent";
// import SkillsPageComponent from "./Components/SkillsPageComponent/SkillsPageComponent";
// import CertificatePageComponent from "./Components/CertificatePageComponent/CertificatePageComponent";
// import ContactPageComponent from "./Components/ContactPageComponent/ContactPageComponent";

// import "../src/assets/style/CSS/App/App.css";

// const App = () => {
//   const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
//   const [isServicesInView, setIsServicesInView] = useState(false);
//   const [isAboutInView, setIsAboutInView] = useState(false);
//   const [isSkillsInView, setIsSkillsInView] = useState(false);
//   const [isCertificateInView, setIsCertificateInView] = useState(false);
//   const [isContactInView, setIsContactInView] = useState(false);
//   const servicesSectionRef = useRef(null);
//   const aboutSectionRef = useRef(null);
//   const skillsSectionRef = useRef(null);
//   const certificateSectionRef = useRef(null);
//   const contactSectionRef = useRef(null);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       // console.log(e.pageX, e.pageY , e.pageY  - (Math.floor(e.pageY / window.innerHeight) * window.innerHeight),"nnnnnnnnn");
//       // console.log(servicesSectionRef.current, "sssssssssssssssssssss")
//       // setHoverPosition({ x: e.pageX, y: (e.pageY  - (Math.floor(e.pageY / (window.innerHeight)) * window.innerHeight))});
//       setHoverPosition({ x: e.x, y: e.y });
//     };

//     document.body.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       document.body.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       let servicesInView = false;
//       let aboutInView = false;
//       let skillsInView = false;
//       let certificateInView = false;
//       let contactInView = false;

//       if (servicesSectionRef.current) {
//         const servicesRect = servicesSectionRef.current.getBoundingClientRect();
//         // servicesInView = servicesRect.top < window.innerHeight * 0.5 && servicesRect.bottom > 0;
//         servicesInView = servicesRect.top < window.innerHeight / 1.8;
//       }

//       if (aboutSectionRef.current) {
//         const aboutRect = aboutSectionRef.current.getBoundingClientRect();
//         // aboutInView = aboutRect.top < window.innerHeight * 0.5 && aboutRect.bottom > 0;
//         aboutInView = aboutRect.top < window.innerHeight / 1.8;
//       }

//       if (skillsSectionRef.current) {
//         const skillsRect = skillsSectionRef.current.getBoundingClientRect();
//         // aboutInView = skillsRect.top < window.innerHeight * 0.5 && skillsRect.bottom > 0;
//         skillsInView = skillsRect.top < window.innerHeight / 1.8;
//       }

//       if (certificateSectionRef.current) {
//         const certificateRect =
//           certificateSectionRef.current.getBoundingClientRect();
//         // aboutInView = certificateRect.top < window.innerHeight * 0.5 && certificateRect.bottom > 0;
//         certificateInView = certificateRect.top < window.innerHeight / 1.8;
//       }

//       if (contactSectionRef.current) {
//         const contactRect = contactSectionRef.current.getBoundingClientRect();
//         // aboutInView = contactRect.top < window.innerHeight * 0.5 && contactRect.bottom > 0;
//         contactInView = contactRect.top < window.innerHeight / 1.8;
//       }

//       if (contactInView) {
//         setIsServicesInView(false);
//         setIsAboutInView(false);
//         setIsCertificateInView(false);
//         setIsSkillsInView(false);
//         setIsContactInView(true);
//       } else if (certificateInView) {
//         setIsServicesInView(false);
//         setIsAboutInView(false);
//         setIsCertificateInView(true);
//         setIsSkillsInView(false);
//         setIsContactInView(false);
//       } else if (skillsInView) {
//         setIsServicesInView(false);
//         setIsAboutInView(false);
//         setIsCertificateInView(false);
//         setIsSkillsInView(true);
//         setIsContactInView(false);
//       } else if (aboutInView) {
//         setIsServicesInView(false);
//         setIsSkillsInView(false);
//         setIsAboutInView(true);
//         setIsCertificateInView(false);
//         setIsContactInView(false);
//       } else if (servicesInView) {
//         setIsServicesInView(true);
//         setIsAboutInView(false);
//         setIsSkillsInView(false);
//         setIsCertificateInView(false);
//         setIsContactInView(false);
//       } else {
//         setIsServicesInView(false);
//         setIsAboutInView(false);
//         setIsSkillsInView(false);
//         setIsCertificateInView(false);
//         setIsContactInView(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <>
//       <NavbarComponent
//         servicesSectionRef={servicesSectionRef}
//         isServicesInView={isServicesInView}
//         aboutSectionRef={aboutSectionRef}
//         isAboutInView={isAboutInView}
//         skillsSectionRef={skillsSectionRef}
//         isSkillsInView={isSkillsInView}
//         certificateSectionRef={certificateSectionRef}
//         isCertificateInView={isCertificateInView}
//         contactSectionRef={contactSectionRef}
//         isContactInView={isContactInView}
//       />

//       <HomePageComponent />
//       <div ref={servicesSectionRef}>
//         <ServicesPageComponent />
//       </div>

//       <div ref={aboutSectionRef}>
//         <AboutPageComponent />
//       </div>

//       <div ref={skillsSectionRef}>
//         <SkillsPageComponent />
//       </div>

//       <div ref={certificateSectionRef}>
//         <CertificatePageComponent />
//       </div>

//       <div ref={contactSectionRef}>
//         <ContactPageComponent />
//       </div>

//       <div
//         className="hover-effect"
//         style={{ left: `${hoverPosition.x}px`, top: `${hoverPosition.y}px` }}
//       ></div>
//     </>
//   );
// };

// export default App;

import React, { useState, useEffect, useRef } from "react";

import NavbarComponent from "./Components/NavbarComponent/NavbarComponent";
import HomePageComponent from "./Components/HomePageComponent/HomePageComponent";
import ServicesPageComponent from "./Components/ServicesPageComponent/ServicesPageComponent";
import AboutPageComponent from "./Components/AboutPageComponent/AboutPageComponent";
import SkillsPageComponent from "./Components/SkillsPageComponent/SkillsPageComponent";
import CertificatePageComponent from "./Components/CertificatePageComponent/CertificatePageComponent";
import ContactPageComponent from "./Components/ContactPageComponent/ContactPageComponent";
import LoaderComponent from "./Components/LoaderComponent/LoaderComponent"; // Import the loader

import "../src/assets/style/CSS/App/App.css";

const App = () => {
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
  const [isServicesInView, setIsServicesInView] = useState(false);
  const [isAboutInView, setIsAboutInView] = useState(false);
  const [isSkillsInView, setIsSkillsInView] = useState(false);
  const [isCertificateInView, setIsCertificateInView] = useState(false);
  const [isContactInView, setIsContactInView] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // State for loading
  const servicesSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const skillsSectionRef = useRef(null);
  const certificateSectionRef = useRef(null);
  const contactSectionRef = useRef(null);

  const [outsideClickedevent, setOutsideClickedEvent] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setHoverPosition({ x: e.x, y: e.y });
    };

    document.body.addEventListener("mousemove", handleMouseMove);

    const handleClickOutside = (event) => {
      setOutsideClickedEvent(event);
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      let servicesInView = false;
      let aboutInView = false;
      let skillsInView = false;
      let certificateInView = false;
      let contactInView = false;

      if (servicesSectionRef.current) {
        const servicesRect = servicesSectionRef.current.getBoundingClientRect();
        servicesInView = servicesRect.top < window.innerHeight / 1.8;
      }

      if (aboutSectionRef.current) {
        const aboutRect = aboutSectionRef.current.getBoundingClientRect();
        aboutInView = aboutRect.top < window.innerHeight / 1.8;
      }

      if (skillsSectionRef.current) {
        const skillsRect = skillsSectionRef.current.getBoundingClientRect();
        skillsInView = skillsRect.top < window.innerHeight / 1.8;
      }

      if (certificateSectionRef.current) {
        const certificateRect =
          certificateSectionRef.current.getBoundingClientRect();
        certificateInView = certificateRect.top < window.innerHeight / 1.8;
      }

      if (contactSectionRef.current) {
        const contactRect = contactSectionRef.current.getBoundingClientRect();
        contactInView = contactRect.top < window.innerHeight / 1.8;
      }

      if (contactInView) {
        setIsServicesInView(false);
        setIsAboutInView(false);
        setIsCertificateInView(false);
        setIsSkillsInView(false);
        setIsContactInView(true);
      } else if (certificateInView) {
        setIsServicesInView(false);
        setIsAboutInView(false);
        setIsCertificateInView(true);
        setIsSkillsInView(false);
        setIsContactInView(false);
      } else if (skillsInView) {
        setIsServicesInView(false);
        setIsAboutInView(false);
        setIsCertificateInView(false);
        setIsSkillsInView(true);
        setIsContactInView(false);
      } else if (aboutInView) {
        setIsServicesInView(false);
        setIsSkillsInView(false);
        setIsAboutInView(true);
        setIsCertificateInView(false);
        setIsContactInView(false);
      } else if (servicesInView) {
        setIsServicesInView(true);
        setIsAboutInView(false);
        setIsSkillsInView(false);
        setIsCertificateInView(false);
        setIsContactInView(false);
      } else {
        setIsServicesInView(false);
        setIsAboutInView(false);
        setIsSkillsInView(false);
        setIsCertificateInView(false);
        setIsContactInView(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoaderComponent />;
  }

  return (
    <>
      <NavbarComponent
        servicesSectionRef={servicesSectionRef}
        isServicesInView={isServicesInView}
        aboutSectionRef={aboutSectionRef}
        isAboutInView={isAboutInView}
        skillsSectionRef={skillsSectionRef}
        isSkillsInView={isSkillsInView}
        certificateSectionRef={certificateSectionRef}
        isCertificateInView={isCertificateInView}
        contactSectionRef={contactSectionRef}
        isContactInView={isContactInView}
        outsideClickedevent={outsideClickedevent}
      />

      <HomePageComponent />
      <div ref={servicesSectionRef}>
        <ServicesPageComponent />
      </div>

      <div ref={aboutSectionRef}>
        <AboutPageComponent />
      </div>

      <div ref={skillsSectionRef}>
        <SkillsPageComponent />
      </div>

      <div ref={certificateSectionRef}>
        <CertificatePageComponent />
      </div>

      <div ref={contactSectionRef}>
        <ContactPageComponent />
      </div>

      <div
        className="hover-effect"
        style={{ left: `${hoverPosition.x}px`, top: `${hoverPosition.y}px` }}
      ></div>
    </>
  );
};

export default App;
