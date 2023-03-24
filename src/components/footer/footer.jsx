import React from "react";
import "./footer.css";
import logo from "../../assets/icons/logo.png";
import { footerLinks1, footerLinks2 } from "../../constants/constant";
import right from "../../assets/icons/right.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section id="footer" className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <div
            className="footer-section1"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <div className="footer-logo">
              <a href="#home">
                <img src={logo} alt="logo" />
              </a>
            </div>

            <h3 className="footer-title">Education</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipis cing elit. Amet,
              vestibulum euismod nullam the elementum. Urna, posuere nisi sit
              gravid.
            </p>
          </div>

          <div
            className="footer-section2"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <ul className="footer-links">
              {footerLinks1.map((link) => (
                <li key={link.id} className="footer-link">
                  <span>
                    <img src={right} alt="right-arrow" />
                  </span>
                  <a href={`#${link.href}`}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="footer-section3"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <ul className="footer-links">
              {footerLinks2.map((link) => (
                <li key={link.id} className="footer-link">
                  <span>
                    <img src={right} alt="right-arrow" />
                  </span>
                  <a href={`#${link.href}`}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="footer-section4"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <p>Звонок по Узбекистану бесплатный</p>
            <div className="footer-phone">+998 (94) 122-90-05</div>
            <button className="btn">
              <a href="tel:998941229005">
                <span>Перезвоните нам</span>
              </a>
            </button>

            <ul className="footer-icons">
              <li>
                <a href="">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="">
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
