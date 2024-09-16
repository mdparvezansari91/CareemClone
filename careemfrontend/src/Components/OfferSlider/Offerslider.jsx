import React from "react";
import "./Offerslider.css";
import logo from "../../assets/LogoandVectors/cplus_logo_f0d0cfe9f5.avif";
import { Slide } from "react-slideshow-image";
import slider from "./offerSliderData";
import 'react-slideshow-image/dist/styles.css'

const Offerslider = () => {
  return (
    <>
      <Slide arrows={false}>
        {slider.map((slide, index) => (
          <div key={index} className="sale-banner each-slide">
            <div className="left">
              <div className="logo">
                <img src={logo} alt="" />
              </div>
              <div className="text">
                <h1>{slide.statement}</h1>
              </div>
            </div>
            <div className="right">
              <img src={slide.image} alt="" />
            </div>
          </div>
        ))}
      </Slide>
    </>
  );
};

export default Offerslider;
