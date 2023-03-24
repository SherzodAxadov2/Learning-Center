import React from "react";
import "./news.css";
import newsImg from "../../assets/images/news-img.png";

const News = () => {
  return (
    <section id="news" className="news">
      <div className="blur-red"></div>
      <div className="container">
        <div className="title" data-aos="fade-up" data-aos-duration="400">
          НОВОСТИ
        </div>

        <div className="news-box">
          <div className="news-img" data-aos="zoom-in" data-aos-duration="500">
            <img src={newsImg} alt="img" />
          </div>
          <div
            className="news-des"
            data-aos="fade-left"
            data-aos-duration="500"
          >
            Lorem ipsum dolor sit amet consectetur. Urna semper urna viverra
            pellentesque volutpat et vitae. Consequat felis ut in pellentesque
            feugiat malesuada varius. Aliquam egestas orci dui est eu. Commodo
            lobortis dolor volutpat enim. Tempor interdum aliquet at lorem nisi.
            Amet nec vel donec aliquet rhoncus faucibus. Bibendum dictumst
            ullamcorper nulla.
          </div>
        </div>
      </div>
      <div className="title-red">НОВОСТИ</div>
    </section>
  );
};

export default News;
