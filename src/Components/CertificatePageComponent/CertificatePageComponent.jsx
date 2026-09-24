import React from "react";
import "../../assets/style/CSS/CertificatePageComponent/CertificatePageComponent.css";
import certificate from "../../assets/files/certificate/Ineuron_Certificate.png";

const CertificatePageComponent = () => {
  const handleCertificateClick = () => {
    window.open("https://drive.google.com/file/d/1ph2UeBS4QUhxchc-_-XlkjyCOWj1Npz7/view?usp=sharing", "_blank");
  };

  return (
    <div className="certificate-page-div">
      <span className="certificate-page-heading-span">Skill Certifications</span>
      <div className="certificate-page-certificates-div">
        <div
          className="certificate-page-certificate-img-outer-div"
          onClick={handleCertificateClick}
        >
          <div className="certificate-page-certificate-img-with-detail-div">
            <img
              src={certificate}
              alt="Certificate"
              className="certificate-page-certificate-img"
            />
            <div className="certificate-page-certificate-img-detail">
              Full Stack Data Science - Ineuron
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificatePageComponent;
