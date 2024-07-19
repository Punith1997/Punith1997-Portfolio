import React from "react";
import "../../assets/style/CSS/LoaderComponent/LoaderComponent.css";

const LoaderComponent = () => {
  const text = "punith.aj.co";

  return (
    <div className="loader-container">
      <div className="animated-text">
        {text.split("").map((char, index) => (
          <span key={index} className="char" style={{ animationDelay: `${index * 0.1}s` }}>
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default LoaderComponent;
