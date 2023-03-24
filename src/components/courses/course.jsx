import React from "react";
import "./courses.css";
import arrowRight from "../../assets/icons/arrow-right.png";

const Course = ({ img, title, date, text }) => {
  return (
    <li className="course-item">
      <div className="course-img">
        <img src={img} alt="" />
      </div>

      <div className="course-top">
        <h2 className="course-title">{title}</h2>
        <span>{date}</span>
      </div>

      <p className="course-des">{text}</p>

      <div className="course-more">
        <div></div>
        <img src={arrowRight} alt="img" />
      </div>
    </li>
  );
};

export default Course;
