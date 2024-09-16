import React from "react";
import HeroSectionServiceContainerData from "./HeroSectionServiceContainerData";
import rightArrow from "../../../assets/LogoandVectors/Arrow_Right_9944c7222f.avif"
import productLogo from "../../../assets/LogoandVectors/productLogo_bcef266a29.avif"
import "./HeroSectionServiceContainer.css";
import "../../../assets/css/global.css";
const HeroSectionServiceContainer = () => {
  return (
    <>
      <div className="hero-section-service-container">
        <div
          className="hero-section-services"
          style={{ backgroundColor: "#3837e4" }}
        >
          <h2 className="text-color-ffffff">Go</h2>
          <h3 className="text-color-ffffff">anywhere</h3>
          <ul className="service-list">
          
            <h4><img src={productLogo} alt="" />
              <span className="span text-color-ffffff">Rides</span>
            </h4>
            <h4><img src={productLogo} alt="" />
              <span className="span text-color-ffffff">Taxi</span>
            </h4>
            <h4><img src={productLogo} alt="" />
              <span className="span text-color-ffffff">Bike</span>
            </h4>
            <h4><img src={productLogo} alt="" />
              <span className="span text-color-ffffff">Car Rental</span>
            </h4>
            <h4><img src={productLogo} alt="" />
              <span className="span text-color-ffffff">SchoolRides</span>
            </h4>
          </ul>
          <span className="right-arrow"><img src={rightArrow} alt="" /></span>
        </div>
        <div
          className="hero-section-services"
          style={{ backgroundColor: "#d2ffd5", color: "#00493e" }}
        >
          <h2 className="span text-color-00493e">Eat</h2>
          <h3 className="text-color-00493e">AnyTime</h3>
          <ul className="service-list">
            <h4><img src={productLogo} alt="" />
              <span className="span text-color-00493e">Food</span>
            </h4>
            <h4><img src={productLogo} alt="" />
              <span className="span text-color-00493e">Dineout</span>
            </h4>
          </ul>
          <span className="right-arrow"><img src={rightArrow} alt="" /></span>
        </div>
        <div className="hero-section-services background-color-7f5ffa">
          <h2 className="text-color-D6FFEA">Get</h2>
          <h3 className="text-color-D6FFEA">Anything</h3>
          <ul className="service-list">
            <h4><img src={productLogo} alt="" />
              <span className="span text-color-D6FFEA">Quick Groceries</span>
            </h4>
            <h4><img src={productLogo} alt="" />
              <span className="span text-color-D6FFEA">Quick Electronics</span>
            </h4>
            <h4><img src={productLogo} alt="" />
              <span className="span text-color-D6FFEA">Supermarkets</span>
            </h4>
            <h4><img src={productLogo} alt="" />
              <span className="span text-color-D6FFEA">Delivery</span>
            </h4>
            <h4><img src={productLogo} alt="" />
              <span className="span text-color-D6FFEA">Salon and Spa</span>
            </h4>
            <h4><img src={productLogo} alt="" />
              <span className="span text-color-D6FFEA">Tickets</span>
            </h4>
            <h4><img src={productLogo} alt="" />
              <span className="span text-color-D6FFEA">Laundry</span>
            </h4>
            <h4><img src={productLogo} alt="" />
              <span className="span text-color-D6FFEA">Flowers</span>
            </h4>
            <h4><img src={productLogo} alt="" />
              <span className=" text-color-D6FFEA">Pharmacy</span>
            </h4>
          </ul>
          <span className="right-arrow text-color-D6FFEA"><img src={rightArrow} alt="" /></span>
        </div>
        <div className="hero-section-services background-color-001942">
          <h2 className="text-color-ffffff">Pay</h2>
          <h3 className="text-color-ffffff">anyone</h3>
          <ul className="service-list">
            <h4><img src={productLogo} alt="" />
              <span className="span text-color-ffffff">Pay</span>
            </h4>
            <h4><img src={productLogo} alt="" />
              <span className="span text-color-ffffff">Donations</span>
            </h4>
            <h4><img src={productLogo} alt="" />
              <span className="span text-color-ffffff">Send Money</span>
            </h4>
          </ul>
          <span className="right-arrow"><img src={rightArrow} alt="" /></span>
        </div>
      </div>
    </>
  );
};

export default HeroSectionServiceContainer;
