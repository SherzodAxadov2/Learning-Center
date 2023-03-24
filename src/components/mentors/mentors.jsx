import React from "react";
import "./mentors.css";
import { mentors } from "../../constants/constant";

const Mentors = () => {
  return (
    <section id="mentors" className="mentors">
      <div className="container">
        <div className="title">НАСТАВНИКИ</div>
        <ul className="mentors-box">
          {mentors.map((mentor) => (
            <li
              key={mentor.id}
              className={`mentors-per ${mentor.selected ? "selected" : ""}`}
            >
              <img src={mentor.img} alt="img" />
              <span>{mentor.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Mentors;
