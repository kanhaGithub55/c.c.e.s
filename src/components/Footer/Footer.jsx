import React from "react";

import './Footer.css'

export default function Footer() {
    return(
        <>
        
        <footer>
            <footer className="under-footer">

                <div className="footer-container">
                    <div className="sub-container">
                        <div className="footer-logo">
                            <img src="homePageImages/Logo.png" className="lastlogo" alt="" />
                        </div>
                        <button className="logo-container">
                            <img src="homePageImages/message.png" alt="" />
                            <p>hello@skillbridge.com</p>
                        </button>
                        <button className="logo-container">
                            <img src="homePageImages/call.png" alt="" />
                            <p>+91 91813 23 2309</p>
                        </button>
                        <button className="logo-container">
                            <img src="homePageImages/location.png" alt="" />
                            <p>Somewhere in the World</p>
                        </button>
                    </div>
                    <div className="sub-container-two">
                        <div className="home-about">
                            <div className="home">
                                <h4 className="footer-headin">Home</h4>
                                <div>
                                    <p>Benefits</p>
                                    <p>Our Courses</p>
                                    <p>Our Testimonials</p>
                                    <p>Our FAQ</p>
                                </div>
                            </div>
                            <div className="about">
                                <h4 className="footer-headin">About Us</h4>
                                <div>
                                    <p>Company</p>
                                    <p>Achievement</p>
                                    <p>Our Goals</p>
                                </div>
                            </div>
                        </div>
                        <div className="social-profile">
                            <h4 className="footer-headin">Social Profile</h4>
                            <div>
                                <button className="social-logo">
                                    <img src="homePageImages/fb.png" className="mark0s" alt="" />
                                </button>
                                <button className=" social-logo">
                                    <img src="homePageImages/twitter.png" className="mark0s" alt="" />
                                </button>
                                <button className=" social-logo">
                                    <img src="homePageImages/linkedin.png" className="mark0s" alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className=" last-footer">
                    <p>© 2023 Skillbridge. All rights reserved.</p>
                </div>
            </footer>
        </footer>
        
        </>
    )

}