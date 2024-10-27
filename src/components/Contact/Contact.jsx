import React from "react";

import './Contact.css'


export default function Contect() {
    return(
        <>
        
        <div class="container01">
    <div class="inner-cont-text">
      <div class="text-heading">
        <h1>Contact Us</h1>
      </div>
      <div class="text-paragraph">
        <p>Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs:
          Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're
          an individual looking to enhance your skills or a business seeking professional development solutions, we have
          a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements.
        </p>
      </div>
    </div>
  </div>
  <hr id="line"/>


  {/* <!-- Contact-Section  --> */}

  <div class="full-hero-sec">
    <div class="input-detail-container">
      <div class="half-input-container">
        <div class="input-value">
          <div class="input">
            <p>First Name</p>
            <input type="text" placeholder="Enter First Name" />
          </div>
          <div class="input">
            <p>Last Name </p>
            <input type="text" placeholder="Enter Last Name" />
          </div>
        </div>
        <div class="input-value">
          <div class="input">
            <p>Email</p>
            <input type="email" placeholder="Enter Your Email" />
          </div>
          <div class="input">
            <p>Phone</p>
            <input type="text" placeholder="Enter Your Number" />
          </div>
        </div >
        <div class="input-value subject">
          <div class="input">
            <p>Subject</p>
            <input type="text" placeholder="Enter Your Subject" />
          </div>
        </div>
      </div>
      <div class="input-value message">
        <div class="input">
          <p>Message</p>
          <input type="text" placeholder="Enter Your Message here..." />
        </div>
      </div>
      <div class="send-message">
        <button>Send Your Message</button>
      </div>
    </div>

    {/* <!-- /* -------- contact-container  ------- */ }

    <div class="contact-container">
      <button class="sub-contact">
          <img src="/contact-page/message.png" alt=""/>
          <p>support@skillbridge.com</p>
      </button>
      <button class="sub-contact">
          <img src="/contact-page/call.png" alt=""/>
          <p>+91 00000 00000</p>
      </button>
      <button class="sub-contact">
          <img src="/contact-page/location.png" alt=""/>
          <p>Some Where in the World</p>
      </button>
      <button class="sub-contact social-button">
          <img src="/contact-page/fb.png" alt=""/>
          <img src="/contact-page/twitter.png" alt=""/>
          <img src="/contact-page/linkedin.png" alt=""/>
          <p>Social Profiles</p>
      </button>
    </div>
  </div>
        
        </>
    )
}