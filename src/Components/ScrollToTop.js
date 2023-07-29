import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="top-to-btm">
      {" "}
      {showTopBtn && (
        <FaAngleUp className="icon-position icon-style" onClick={goToTop} />
      )}{" "}
      <div className="floating_btn">
        <a target="_blank" href="https://wa.me/+918826849039">
          <div className="contact_icon">
          <i className="bi bi-whatsapp"></i>
          </div>
          <p className="text_icon">Talk to us?</p>
        </a>
      </div>
    </div>
  );
};
export default ScrollToTop;
