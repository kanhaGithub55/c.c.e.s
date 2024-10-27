import React, { useState } from "react";

import {Link, NavLink} from 'react-router-dom'

import './Header.css'

// import React, { useEffect } from 'react'


export default function Header() {

        const [show , setShow] = useState(false);
    
    return (
        <>
        

    <div className={`${show ? "" : "hide"} mob`}>
        <h1>Welcome to C.C.E.S.</h1>
        <img src="/homePageImages/Logo.png" alt=""/>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Courses">Courses</Link></li>
            <li><Link to="/About">About Us</Link></li>
            <li><Link to="/Pricing">Pricing</Link></li>
            <li><Link to="/Contact">contact</Link></li>
            <li className="ham"
               
                onClick={()=>{
                    setShow(false)
                }}
            ><Link to="#">✘</Link></li>
        </ul>
    </div>


        {/* <!-- -------------------header section------------------ --> */}

        <header>
            <div className="Top-banner">
                <p id="head-line">Free Courses 🌟 Sale Ends Soon, Get It Now
                    <img className="arrow" src="/homePageImages/Vector (Stroke).png" alt=""/>
                </p>
            </div>

            <div className=" navbar">
                <div className="container">
                    <div className="logo">
                        <img src="/homePageImages/Logo.png" className="company-logo" alt=""/>
                    </div>
                    <div className="button container">
                        <NavLink to="/" className="button-section"
                         
                        >Home</NavLink>
                        <NavLink to="/Courses">Courses</NavLink>
                        <NavLink to="/About">About Us</NavLink>
                        <NavLink to="/Pricing">Pricing</NavLink>
                        <NavLink to="/Contact">Contact</NavLink>

                    </div>
                </div>
                <div className="login-button">
                    <NavLink to="/SingUp" id="login">Sing Up</NavLink>
                   <div className="login-menu">
                   <NavLink to="/Login" id="login">login</NavLink>
                    <li onClick={()=>{
                    setShow(true)
                }}
                className="ham hide">☰</li>
                   </div>
                </div>

                {/* <li className="ham">☰</li> */}

            </div>


           

        </header>
        </>

    );


}
