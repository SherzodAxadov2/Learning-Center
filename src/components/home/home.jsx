import React from "react";
import "./home.css";
import homeBg from "../../assets/images/home-bg.png";
import finger from "../../assets/images/finger.png";
import oval from "../../assets/icons/oval.png";
import arrow from "../../assets/icons/arrow.png";

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-left">
        <img src={homeBg} alt="home-bg" />
      </div>
      <div className="home-right">
        <img src={finger} alt="finger-img" />
      </div>

      <div className="home-info">
        <div className="home-title">
          <h1>Lorem ipsum dolor sit amet</h1>
          <img src={oval} alt="img" />
        </div>
        <div className="home-des">
          <p>
            Lorem ipsum dolor sit amet consectetur. Tincidunt aliquet dictum
            sodales bibendum etiam viverra mollis amet. Urna sed molestie auctor
            nisi.
          </p>
          <img src={arrow} alt="arrow" />
        </div>
        <div className="home-btns">
          <button className="btn">
            <span>Lorem ipsum dolor</span>
          </button>
          <button className="btn-outline">
            <span>Lorem ipsum dolor</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
