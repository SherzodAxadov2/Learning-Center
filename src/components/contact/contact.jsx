import React, { useState } from "react";
import "./contact.css";
import finger6 from "../../assets/images/pngwing 6.png";
import ReactInputMask from "react-input-mask";

const Contact = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(
      `User name is: ${name}, phone number: ${number}, email: ${email}`
    );
    setName("");
    setNumber("");
    setEmail("");
  };
  return (
    <section id="contact" className="contact">
      <div className="finger-6">
        <img src={finger6} alt="img" />
      </div>

      <div className="container">
        <div className="title" data-aos="fade-up" data-aos-duration="500">
          ОСТАВЬТЕ ЗАЯВКУ
        </div>
        <form className="contact-input">
          <input
            type="text"
            placeholder="Ваше имя:"
            data-aos="fade-left"
            data-aos-duration="500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <ReactInputMask
            mask="+\9\9\8\(99) 999 99 99"
            maskChar={"*"}
            placeholder={`+998 (**) *** ** **`}
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            data-aos="fade-left"
            data-aos-duration="500"
            required
          />
          <input
            type="email"
            placeholder="Email:"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            data-aos="fade-left"
            data-aos-duration="500"
          />
          <button
            type="submit"
            className="btn"
            onClick={(e) => submitHandler(e)}
            data-aos="fade-right"
            data-aos-duration="500"
          >
            <span>Оставить заявку</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
