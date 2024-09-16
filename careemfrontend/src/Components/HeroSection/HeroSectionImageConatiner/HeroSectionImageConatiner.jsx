import React from "react";
import HerosectionImage from "../../../assets/images/careemHeroSectionImage.avif"
import "./HeroSectionImageConatiner.css"
const HeroSectionImageContainer = ()=>{
    return(
        <>
        <div className="imagecontainer">
            <img src={HerosectionImage} alt="" />
        </div>
        </>
    )
}


export default HeroSectionImageContainer;