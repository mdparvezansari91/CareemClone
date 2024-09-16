import React from "react";
import "./Navbar.css"
import CareemLogo from "../../assets/LogoandVectors/CareemLogo.avif"
import { Link, Outlet } from "react-router-dom";

const Navbar = ()=>{
    return(
        <>
        <div className="header">
            <div className="header-logo">
                <img src={CareemLogo} alt="" />
            </div>
            <div className="header-links">
                <ul className="header-links-list">
                    <li className="list-item">Services</li>
                    <li className="list-item">Partners</li>
                    <li className="list-item">Careem Plus</li>
                    <li className="list-item">About Us</li>
                </ul>
            </div>
            <div className="header-signin">
                <div className="signin">
                <button className="signin-btn">Sign In</button>
                </div>
                <div className="language">
                    <select className="language-select">
                        <option value="en">English</option>
                        <option value="hindi">Hindi</option>

                    </select>
                </div>
                
            </div>

        </div>
        <Outlet/>
        </>
    )
}


export default Navbar;