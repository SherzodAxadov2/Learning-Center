import React from "react";
import "./courses.css";
import finger5 from "../../assets/images/pngwing 5.png";
import Course from "./course";
import { courses } from "../../constants/constant";

const Courses = () => {
  return (
    <section id="courses" className="courses">
      <div className="finger-5">
        <img src={finger5} alt="fingerImg" />
      </div>
      <div className="blur-red"></div>

      <div className="container">
        <div className="title">КУРСЫ</div>

        <ul className="course-box">
          {courses.map((course) => (
            <Course key={course.id} {...course} />
          ))}
        </ul>

        <div className="course-btn">
          <button className="btn">
            <span>ВСЕ КУРСЫ</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
