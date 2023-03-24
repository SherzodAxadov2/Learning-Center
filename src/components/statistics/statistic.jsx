import React from "react";
import "./statistic.css";
import finger3 from "../../assets/images/pngwing 3.png";
import { stats } from "../../constants/constant";

const Statistic = () => {
  return (
    <div className="stat">
      <div className="finger-3">
        <img src={finger3} alt="img" />
      </div>

      <div className="mini-container">
        <ul className="stat-all">
          {stats.map((stat) => (
            <li
              key={stat.id}
              className="stat-item"
              data-aos="flip-up"
              data-aos-duration="500"
            >
              <div className="stat-count">{stat.count}</div>
              <div className="stat-text">{stat.text}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Statistic;
