import React from "react";
import "./ContentWithOneImage.css"

const ContentWithOneImage = (props) =>{
    return(
        <>
        <div className="container">
            <div className="container-content">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <button>{props.buttontext}</button>
            </div>
            <div className="image-container">
                <img src={props.image} alt="image"/>
            </div>
        </div>
        </>
    )
}


export default ContentWithOneImage;