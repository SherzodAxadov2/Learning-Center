import React from "react";
import "./about.css";
import aboutImg from "../../assets/images/about-img.png";
import pngwing2 from "../../assets/images/pngwing 2.png";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="blur-red"></div>
      <img src={pngwing2} alt="img" className="finger-2" />

      <div className="container">
        <div className="about-wrapper">
          <div className="about-des">
            <div className="about-title">О НАС</div>
            <div className="about-text">
              Lorem ipsum dolor sit amet consectetur. Urna semper urna viverra
              pellentesque volutpat et vitae. Consequat felis ut in pellentesque
              feugiat malesuada varius. Aliquam egestas orci dui est eu. Commodo
              lobortis dolor volutpat enim. Tempor interdum aliquet at lorem
              nisi. Amet nec vel donec aliquet rhoncus faucibus. Bibendum
              dictumst ullamcorper nulla.
            </div>
          </div>
          <div className="about-img">
            <img src={aboutImg} alt="img" />
            <p>О НАС</p>
            <div className="about-bottom"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
