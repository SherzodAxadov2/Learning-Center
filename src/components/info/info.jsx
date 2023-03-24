import React from "react";
import "./info.css";
import { info } from "../../constants/constant";

const Info = () => {
  return (
    <section className="info">
      <div className="blur-red"></div>
      <div className="container">
        <div className="info-wrapper">
          <ul className="info-box">
            {info.map((info) => (
              <li key={info.id} className="info-item">
                <div className="info-img">
                  <img src={info.img} alt="img" />
                </div>
                <p className="info-text">{info.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Info;
