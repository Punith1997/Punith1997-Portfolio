import React, { useState, useEffect } from "react";
import "../../assets/style/CSS/SkillsPageComponent/SkillsPageComponent.css";

const SkillsPageComponent = () => {
  return (
    <div className="skills-experience-page-div">
      {/* <div className="skills-page-div">
        <span className="skills-page-heading-span">My Skills</span>
        <div className="skills-page-cards-div">
          <div className="skills-page-single-card-div">
            <div className="skills-page-single-card-heading-outer-div">
              <div className="skills-page-single-card-heading-div">
                Website and Mobile App Development
              </div>
            </div>
            <div className="skills-page-single-card-skills-div">
              <div className="skills-page-single-card-single-skill-outer-div">
                <div className="skills-page-single-card-single-skill-div">
                  HTML
                </div>
              </div>
              <div className="skills-page-single-card-single-skill-outer-div">
                <div className="skills-page-single-card-single-skill-div">
                  CSS
                </div>
              </div>
              <div className="skills-page-single-card-single-skill-outer-div">
                <div className="skills-page-single-card-single-skill-div">
                  JAVASCRIPT
                </div>
              </div>
              <div className="skills-page-single-card-single-skill-outer-div">
                <div className="skills-page-single-card-single-skill-div">
                  REACT
                </div>
              </div>
              <div className="skills-page-single-card-single-skill-outer-div">
                <div className="skills-page-single-card-single-skill-div">
                  REACT NATIVE
                </div>
              </div>
              <div className="skills-page-single-card-single-skill-outer-div">
                <div className="skills-page-single-card-single-skill-div">
                  JINJA
                </div>
              </div>
              <div className="skills-page-single-card-single-skill-outer-div">
                <div className="skills-page-single-card-single-skill-div">
                  PYTHON
                </div>
              </div>
              <div className="skills-page-single-card-single-skill-outer-div">
                <div className="skills-page-single-card-single-skill-div">
                  DJANGO
                </div>
              </div>
              <div className="skills-page-single-card-single-skill-outer-div">
                <div className="skills-page-single-card-single-skill-div">
                  REST FRAMEWORK
                </div>
              </div>
            </div>
          </div>
          <div className="skills-page-single-card-div">
            <div className="skills-page-single-card-heading-outer-div">
              <div className="skills-page-single-card-heading-div">
                AI and Machine Learning
              </div>
            </div>
            <div className="skills-page-single-card-skills-div">
              <div className="skills-page-single-card-single-skill-outer-div">
                <div className="skills-page-single-card-single-skill-div">
                  TENSORFLOW
                </div>
              </div>
              <div className="skills-page-single-card-single-skill-outer-div">
                <div className="skills-page-single-card-single-skill-div">
                  PYTORCH
                </div>
              </div>
              <div className="skills-page-single-card-single-skill-outer-div">
                <div className="skills-page-single-card-single-skill-div">
                  MACHINE LEARNING
                </div>
              </div>
              <div className="skills-page-single-card-single-skill-outer-div">
                <div className="skills-page-single-card-single-skill-div">
                  DEEP LEARNING
                </div>
              </div>
              <div className="skills-page-single-card-single-skill-outer-div">
                <div className="skills-page-single-card-single-skill-div">
                  COMPUTER VISION
                </div>
              </div>
              <div className="skills-page-single-card-single-skill-outer-div">
                <div className="skills-page-single-card-single-skill-div">
                  NLP
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="experience-page-div">
        <div className="experience-page-heading-outer-div">
          <span className="experience-page-heading-span">
            My Skills & Experience
          </span>
        </div>
        <p className="experience-page-info-div">
          Since 2017, I've gained diverse experience in the IT/Tech industry
          through both freelance and remote positions. With a focus on
          e-commerce, marketing, and SaaS, I've contributed to a wide range of
          client projects. Additionally, I founded a design and development
          agency in 2018. I'm currently seeking a collaborative role within a
          well-organized team where I can continue to grow my expertise.
        </p>

        <div className="experience-page-cards-div">
          <div className="experience-page-single-card-div">
            <div className="experience-page-single-card-header-div">
              <div className="experience-page-single-card-role-div">
                <div className="experience-page-single-card-role-details-div">
                  <div className="experience-page-single-card-role-heading-div">
                    Software Engineer
                  </div>
                  <div className="experience-page-single-card-role-heading-company-div">
                    at <strong>Compviz Tech</strong>, Bangalore
                  </div>
                </div>
              </div>
              <div className="experience-page-single-card-year-div">
                2022 - Present
              </div>
            </div>

            <div className="experience-page-single-card-experience-section-div">
              <div class="experience-page-single-card-experience-section-details-div">
                <div class="experience-page-single-card-experience-section-single-detail-div">
                  <h3>
                    Web Application Development for Defect Analysis in
                    Electrical Power Lines
                  </h3>
                  <div className="experience-page-single-card-experience-section-skills-div">
                    <div className="experience-page-single-card-experience-section-single-skill-outer-div">
                      <div className="experience-page-single-card-experience-section-single-skill-div">
                        HTML
                      </div>
                    </div>
                    <div className="experience-page-single-card-experience-section-single-skill-outer-div">
                      <div className="experience-page-single-card-experience-section-single-skill-div">
                        CSS
                      </div>
                    </div>
                    <div className="experience-page-single-card-experience-section-single-skill-outer-div">
                      <div className="experience-page-single-card-experience-section-single-skill-div">
                        Javascript
                      </div>
                    </div>
                    <div className="experience-page-single-card-experience-section-single-skill-outer-div">
                      <div className="experience-page-single-card-experience-section-single-skill-div">
                        ReactJS
                      </div>
                    </div>
                    <div className="experience-page-single-card-experience-section-single-skill-outer-div">
                      <div className="experience-page-single-card-experience-section-single-skill-div">
                        Python
                      </div>
                    </div>
                    <div className="experience-page-single-card-experience-section-single-skill-outer-div">
                      <div className="experience-page-single-card-experience-section-single-skill-div">
                        DJango
                      </div>
                    </div>
                    <div className="experience-page-single-card-experience-section-single-skill-outer-div">
                      <div className="experience-page-single-card-experience-section-single-skill-div">
                        Rest Framework
                      </div>
                    </div>
                  </div>
                  <ul>
                    <li>
                      Directed the end-to-end development of a robust web
                      application for precise defect analysis within electrical
                      power lines and tower components.
                    </li>
                    <li>
                      Leveraged ReactJS for the frontend and Django for the
                      backend to ensure seamless operation and scalable
                      architecture.
                    </li>
                    <li>
                      Improved the efficiency and accuracy of defect analysis,
                      leading to a notable boost in daily productivity.
                    </li>
                  </ul>
                </div>
                <div className="experience-page-single-card-experience-section-single-detail-seperator-line-div"></div>
                <div class="experience-page-single-card-experience-section-single-detail-div">
                  <h3>
                    AI Model Engineering for Thermal and Conductor Wire Analysis
                  </h3>
                  <div className="experience-page-single-card-experience-section-skills-div">
                    <div className="experience-page-single-card-experience-section-single-skill-outer-div">
                      <div className="experience-page-single-card-experience-section-single-skill-div">
                        Tesnsorflow
                      </div>
                    </div>
                    <div className="experience-page-single-card-experience-section-single-skill-outer-div">
                      <div className="experience-page-single-card-experience-section-single-skill-div">
                        Pytorch
                      </div>
                    </div>
                    <div className="experience-page-single-card-experience-section-single-skill-outer-div">
                      <div className="experience-page-single-card-experience-section-single-skill-div">
                        Machine Learning
                      </div>
                    </div>
                    <div className="experience-page-single-card-experience-section-single-skill-outer-div">
                      <div className="experience-page-single-card-experience-section-single-skill-div">
                        Deep Learning
                      </div>
                    </div>
                    <div className="experience-page-single-card-experience-section-single-skill-outer-div">
                      <div className="experience-page-single-card-experience-section-single-skill-div">
                        Computer Vision
                      </div>
                    </div>
                    <div className="experience-page-single-card-experience-section-single-skill-outer-div">
                      <div className="experience-page-single-card-experience-section-single-skill-div">
                        YOLO
                      </div>
                    </div>
                    <div className="experience-page-single-card-experience-section-single-skill-outer-div">
                      <div className="experience-page-single-card-experience-section-single-skill-div">
                        Detectron
                      </div>
                    </div>
                    <div className="experience-page-single-card-experience-section-single-skill-outer-div">
                      <div className="experience-page-single-card-experience-section-single-skill-div">
                        YOLO OBB
                      </div>
                    </div>
                    <div className="experience-page-single-card-experience-section-single-skill-outer-div">
                      <div className="experience-page-single-card-experience-section-single-skill-div">
                        UNet
                      </div>
                    </div>
                  </div>
                  <ul>
                    <li>
                      Engineered advanced AI models for thermal image analysis
                      and semantic segmentation for conductor wire analysis.
                    </li>
                    <li>
                      Implemented YOLO, Detectron, and YOLO OBB for defect
                      detection and UNet for semantic segmentation.
                    </li>
                    <li>
                      Significantly enhanced analysis efficiency and accuracy,
                      leading to a notable boost in daily productivity.
                    </li>
                  </ul>
                </div>
                <div className="experience-page-single-card-experience-section-single-detail-seperator-line-div"></div>

                <div class="experience-page-single-card-experience-section-single-detail-div">
                  <h3>Feeder Analytics Dashboard Integration</h3>
                  <div className="experience-page-single-card-experience-section-skills-div">
                    <div className="experience-page-single-card-experience-section-single-skill-outer-div">
                      <div className="experience-page-single-card-experience-section-single-skill-div">
                        Apache Superset
                      </div>
                    </div>
                    <div className="experience-page-single-card-experience-section-single-skill-outer-div">
                      <div className="experience-page-single-card-experience-section-single-skill-div">
                        Python
                      </div>
                    </div>
                    <div className="experience-page-single-card-experience-section-single-skill-outer-div">
                      <div className="experience-page-single-card-experience-section-single-skill-div">
                        Django
                      </div>
                    </div>
                    <div className="experience-page-single-card-experience-section-single-skill-outer-div">
                      <div className="experience-page-single-card-experience-section-single-skill-div">
                        Flask
                      </div>
                    </div>
                    <div className="experience-page-single-card-experience-section-single-skill-outer-div">
                      <div className="experience-page-single-card-experience-section-single-skill-div">
                        ReactJS
                      </div>
                    </div>
                    <div className="experience-page-single-card-experience-section-single-skill-outer-div">
                      <div className="experience-page-single-card-experience-section-single-skill-div">
                        SQL
                      </div>
                    </div>
                    <div className="experience-page-single-card-experience-section-single-skill-outer-div">
                      <div className="experience-page-single-card-experience-section-single-skill-div">
                        Jinja
                      </div>
                    </div>
                    <div className="experience-page-single-card-experience-section-single-skill-outer-div">
                      <div className="experience-page-single-card-experience-section-single-skill-div">
                        Time Series
                      </div>
                    </div>
                  </div>
                  <ul>
                    <li>
                      Integrated Apache Superset into the web application for
                      Feeder analytics dashboard and power supply optimization.
                    </li>
                    <li>
                      Provided comprehensive insights and enhanced operational
                      efficiency by 30%.
                    </li>
                  </ul>
                </div>
                <div className="experience-page-single-card-experience-section-single-detail-seperator-line-div"></div>

                <div class="experience-page-single-card-experience-section-single-detail-div">
                  <h3>
                    Mobile Application Development for Electric Meter
                    Replacements
                  </h3>
                  <div className="experience-page-single-card-experience-section-skills-div">
                    <div className="experience-page-single-card-experience-section-single-skill-outer-div">
                      <div className="experience-page-single-card-experience-section-single-skill-div">
                        React Native
                      </div>
                    </div>
                  </div>
                  <ul>
                    <li>
                      Developed a React Native mobile application to streamline
                      technician operations in the field for electric meter
                      replacements.
                    </li>
                    <li>
                      Achieved a significant reduction in manual errors and
                      paperwork, while increasing daily replacements by 20%.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPageComponent;
