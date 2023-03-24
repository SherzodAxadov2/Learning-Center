import React, { useEffect, useState } from "react";
import "./navbar.css";
import logo from "../../assets/icons/logo.png";
import { langs, navLinks } from "../../constants/constant";
import flag from "../../assets/icons/flag.png";
import { BsChevronDown } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [stickyClass, setStickyClass] = useState("");

  function stickNavbar() {
    let windowHeight = window.scrollY;
    windowHeight > 30 ? setStickyClass("sticky-nav") : setStickyClass("");
  }

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
  }, []);

  const [allNavLink, setAllNavLink] = useState(navLinks);
  const [showLangs, setShowLangs] = useState(false);
  const [allLangs, setAllLangs] = useState(langs);
  const [openMenu, setOpenMenu] = useState(false);
  const linkHandler = (id) => {
    setAllNavLink(
      allNavLink.map((link) =>
        link.id === id
          ? { ...link, isActive: true }
          : { ...link, isActive: false }
      )
    );
  };
  const showLangshandler = () => {
    setShowLangs(!showLangs);
  };
  const selectLangHandler = (id) => {
    setAllLangs(
      allLangs.map((lang) =>
        lang.id === id
          ? { ...lang, selected: true }
          : { ...lang, selected: false }
      )
    );
  };
  return (
    <section className={`nav ${stickyClass}`}>
      <div className={`navbar`}>
        <div className="nav--logo">
          <a href="#home">
            <img src={logo} alt="logo" className="logo" />
          </a>
        </div>
        <div className="nav-center md-none">
          <ul className="nav-links">
            {allNavLink.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.href}`}
                  className={`nav-link ${link.isActive ? "active" : ""} ${
                    link.selected ? "selected" : ""
                  }`}
                  onClick={() => linkHandler(link.id)}
                >
                  <span>{link.title}</span>
                  {link.star ?? link.star}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-lang" onClick={showLangshandler}>
            <img src={flag} alt="flag" />
            <p>{allLangs.filter((link) => link.selected)[0].text}</p>
            <span>
              <BsChevronDown />
            </span>

            <ul className={`${showLangs ? "open" : ""}`}>
              {allLangs
                .filter((lang) => !lang.selected)
                .map((lang) => (
                  <li key={lang.id} onClick={() => selectLangHandler(lang.id)}>
                    <p>{lang.text}</p>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <div className="nav-right md-none">
          <a href="#contact" className="nav-link">
            КОНТАКТЫ
          </a>
        </div>
        <div
          className="hamburger d-none md-block"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <FiMenu />
        </div>

        <div className={`menu ${openMenu ? "open" : ""}`}>
          <div className="close" onClick={() => setOpenMenu(!openMenu)}>
            <IoMdClose />
          </div>

          <div className="menu-inner">
            <div className="nav-center">
              <ul className="nav-links">
                {allNavLink.map((link) => (
                  <li key={link.id} onClick={() => setOpenMenu(!openMenu)}>
                    <a
                      href={`#${link.href}`}
                      className={`nav-link ${link.isActive ? "active" : ""} ${
                        link.selected ? "selected" : ""
                      }`}
                      onClick={() => linkHandler(link.id)}
                    >
                      <span>{link.title}</span>
                      {link.star ?? link.star}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="nav-lang" onClick={showLangshandler}>
                <img src={flag} alt="flag" />
                <p>{allLangs.filter((link) => link.selected)[0].text}</p>
                <span>
                  <BsChevronDown />
                </span>

                <ul className={`${showLangs ? "open" : ""}`}>
                  {allLangs
                    .filter((lang) => !lang.selected)
                    .map((lang) => (
                      <li
                        key={lang.id}
                        onClick={() => selectLangHandler(lang.id)}
                      >
                        <p>{lang.text}</p>
                      </li>
                    ))}
                </ul>
              </div>
            </div>

            <div className="nav-right">
              <a
                href="#contact"
                className="nav-link"
                onClick={() => setOpenMenu(!openMenu)}
              >
                КОНТАКТЫ
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
