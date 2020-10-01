import React, { useEffect, useState } from "react";
import "../styles/nav.scss";

const Navbar = () => {
  const [show, setHandleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setHandleShow(true);
      } else setHandleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix logo"
        className="nav__logo"
      />
      <img
        src="https://i.imgur.com/WM6zTNc.png"
        alt="netflix user"
        className="nav__avatar"
      />
    </div>
  );
};
export default Navbar;
