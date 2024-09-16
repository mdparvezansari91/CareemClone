import React from "react";
import HeroSectionImageContainer from "../../Components/HeroSection/HeroSectionImageConatiner/HeroSectionImageConatiner";
import "./Home.css";
import HeroSectionServiceContainer from "../../Components/HeroSection/HeroSectionServiceContainer/HeroSectionServiceContainer";
import Offerslider from "../../Components/OfferSlider/Offerslider";
import ContentWithOneImage from "../../Components/ContentWithOneImage/ContentWithOneImage";
import aboutusimage from "../../assets/images/About_us_HomePage.avif";
const Home = () => {
  return (
    <>
      <div className="home-main-container">
        <div className="HeroSectionImageContainer">
          <HeroSectionImageContainer />
        </div>
        <div className="HeroSectionServiceContainer">
          <HeroSectionServiceContainer />
        </div>
        <div className="offerslider">
          <Offerslider />
        </div>
        <div className="about-us-section">
          <ContentWithOneImage
            title="About Us"
            description="Careem’s purpose is to simplify and improve the lives of people and build an awesome organisation that inspires. Learn more about our purpose, people and services."
            image={aboutusimage}
            buttontext="Read more"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
