import React from "react";
import AboutV1Data from "../../jsonData/about/AboutV1Data.json";
import { HashLink as Link } from "react-router-hash-link";
import ReactWOW from "react-wow";

const AboutV1 = () => {
  return (
    <>
      <section id="about" className="about-section">
        <div className="anim-icons full-width">
          <span className="icon icon-circle-blue"></span>
          <ReactWOW animation="fadeInLeft">
            <span className="icon icon-dots"></span>
          </ReactWOW>
          <ReactWOW animation="zoomIn">
            <span className="icon icon-circle-1"></span>
          </ReactWOW>
        </div>
        <div className="auto-container">
          <div className="row">
            <div className="content-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="sec-title">
                  {/* <span className="title">ABOUT EVENT</span> */}
                  <h2>Reimagine Work. Redefine HR.</h2>
                  <div className="text">
                    The Future of Work HR Conference in Bahrain brings together CHROs, HR Directors, People & Culture Leads, and Talent Decision-Makers. Together, they address the critical challenges and emerging opportunities shaping the future of work, while exploring innovative strategies to redefine the role of HR in a changing world.
                  </div>
                </div>
                {/* <ul className="list-style-one">
                  {AboutV1Data.map((aboutData) => (
                    <li key={aboutData.id}>{aboutData.listData}</li>
                  ))}
                </ul> */}
               
              </div>
            </div>
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="image-box">
                <ReactWOW animation="fadeIn">
                  <figure className="image">
                    <img src="../images/resource/about-us.jpeg" alt="image" />
                  </figure>
                </ReactWOW>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutV1;
