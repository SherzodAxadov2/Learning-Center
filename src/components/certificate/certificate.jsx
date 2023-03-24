import React, { useState } from "react";
import "./certificate.css";
import finger4 from "../../assets/images/pngwing 4.png";
import { crtfs } from "../../constants/constant";

const Certificate = () => {
  const [allCrtf, setAllCetcrtf] = useState(crtfs);
  const selectHandler = (id) => {
    setAllCetcrtf(
      allCrtf.map((crtf) =>
        crtf.id === id
          ? { ...crtf, selected: true }
          : { ...crtf, selected: false }
      )
    );
  };
  return (
    <div className="crtf">
      <div className="blur-red"></div>
      <div className="finger-4">
        <img src={finger4} alt="img" />
      </div>
      <div className="title-red">СЕРТИФИКАТЫ</div>

      <div className="container">
        <div className="title" data-aos="fade-up" data-aos-duration="400">
          СЕРТИФИКАТЫ
        </div>
        <div className="crtf-wrapper">
          <ul className="crtf-imgs">
            {allCrtf.map((crtf) => (
              <li
                key={crtf.id}
                className={`crtf-item ${crtf.selected ? "selected" : ""}`}
                onClick={() => selectHandler(crtf.id)}
              >
                <img src={crtf.img} alt="img" className="crtf-img" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
