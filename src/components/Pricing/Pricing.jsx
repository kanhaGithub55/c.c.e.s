import React from "react";

import './Pricing.css'


export default function Pricing(){
    return(
        <>
        
        <div class="main-price-section">
        <div class="price-section">
          <h1>Our Pricings</h1>
        </div>

        <div class="price-para">
          <p class="para">
            Welcome to SkillBridge's Pricing Plan page, where we offer two
            comprehensive options to cater to your needs: Free and Pro. We
            believe in providing flexible and affordable pricing options for our
            services. Whether you're an individual looking to enhance your
            skills or a business seeking professional development solutions, we
            have a plan that suits you. Explore our pricing options below and
            choose the one that best fits your requirements.
          </p>
        </div>
      </div>
      <hr id="line"/>

      {/* <!-- ----------------------------------stage 3--------------------------- --> */}

        <div class="month-year-card">
          <div class="a">
          <div class="time">
            <div class="month">
              <a href="">Monthly</a>
            </div>
            <div class="month">
              <a href="">Yearly</a>
            </div>
          </div>
        </div>

          <div class="price-card">
            <div class="time-card">
              <p class="Plan">Free Plan</p>
  
              <div class="h1">
                <h1>$0</h1>
                <p>/month</p>
              </div>
  
              <div class="main-free-plan">
                <h3>Avilable Features</h3>
  
                <div class="free-plan">
                  <img
                    src="/pricing-card/Icon Container01.png"
                    alt=""
                  />
                  <p>Access to selected free courses.</p>
                </div>
  
                <div class="free-plan">
                  <img
                    src="/pricing-card/Icon Container01.png"
                    alt=""
                  />
                  <p>Limited course materials and resources.</p>
                </div>
  
                <div class="free-plan">
                  <img
                    src="/pricing-card/Icon Container01.png"
                    alt=""
                  />
                  <p>Basic community support.</p>
                </div>
  
                <div class="free-plan">
                  <img
                    src=" /pricing-card/Icon Container01.png"
                    alt=""
                  />
                  <p>No certification upon completion.</p>
                </div>
  
                <div class="free-plan">
                  <img
                    src="/pricing-card/Icon Container01.png"
                    alt=""
                  />
                  <p>Ad-supported platform.</p>
                </div>
  
                <div class="free-plan">
                  <img
                    src="/pricing-card/wrong.png"
                    alt=""
                    class="imgs"
                  />
                  <p>Access to exclusive Pro Plan community forums.</p>
                </div>
  
                <div class="free-plan">
                  <img
                    src="/pricing-card/wrong.png"
                    alt=""
                    class="imgs"
                  />
                  <p>Early access to new courses and updates.</p>
                </div>
  
                <div class="price-button">
                  <button>Get Started</button>
                </div>
              </div>
            </div>
  
            <div class="time-card">
              <p class="Plan">Pro Plan</p>
  
              <div class="h1">
                <h1>$79</h1>
                <p>/month</p>
              </div>
  
              <div class="main-free-plan">
                <h3>Avilable Features</h3>
  
                <div class="free-plan">
                  <img
                    src="/pricing-card/Icon Container01.png"
                    alt=""
                    class="imgs"
                  />
                  <p>Unlimited access to all courses.</p>
                </div>
  
                <div class="free-plan">
                  <img
                    src="/pricing-card/Icon Container01.png"
                    alt=""
                    class="imgs"
                  />
                  <p>Unlimited course materials and resources.</p>
                </div>
  
                <div class="free-plan">
                  <img
                    src="/pricing-card/Icon Container01.png"
                    alt=""
                    class="imgs"
                  />
                  <p>Priority support from instructors.</p>
                </div>
  
                <div class="free-plan">
                  <img
                    src="/pricing-card/Icon Container01.png"
                    alt=""
                    class="imgs"
                  />
                  <p>Course completion certificates.</p>
                </div>
  
                <div class="free-plan">
                  <img
                    src="/pricing-card/Icon Container01.png"
                    alt=""
                    class="imgs"
                  />
                  <p>Ad-free experience.</p>
                </div>
  
                <div class="free-plan">
                  <img
                    src="/pricing-card/Icon Container01.png"
                    alt=""
                    class="imgs"
                  />
                  <p>Access to exclusive Pro Plan community forums.</p>
                </div>
  
                <div class="free-plan">
                  <img
                    src="/pricing-card/Icon Container01.png"
                    alt=""
                    class="imgs"
                  />
                  <p>Early access to new courses and updates.</p>
                </div>
  
                <div class="price-button">
                  <button>Get Started</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      <div class="course-percheing-card">
        <div class="last-two-card">
          <div class="last-card-heading">
            <h1>Frequently Asked Questions</h1>
            <p>
              Still you have any questions? Contact our Team via
              support@skillbridge.com
            </p>
            <div class="button-tag">
              <button>See All FAQ's</button>
            </div>
          </div>
          <div class="last-full-card">
            <div class="last-card">
              <div class="last-card-top-pra">
                <p>Can I enroll in multiple courses at once?</p>
                <img  src="/pricing-card/wrong.png"  class="mark0s" alt="" />
                {/* <!-- <button>✖</button> --> */}
              </div>
              <p id="p">
                Absolutely! You can enroll in multiple courses simultaneously and
                access them at your convenience.
              </p>
              <div class="last-card-right-arow">
                <p>Enrollment Process for Different Courses</p>
                <img src="/pricing-card/arrow.png" class="mark0s" alt="" />
              </div>
            </div>
            <div class="last-card-right-arow">
              <p>What kind of support can I expect from instructors?</p>
              <img src="/pricing-card/add.png" class="mark0s" alt="" />
            </div>
            <div class="last-card-right-arow">
              <p>
                Are the courses self-paced or do they have specific start and end
                dates?
              </p>
              <img src="/pricing-card/add.png" class="mark0s" alt="" />
            </div>
            <div class="last-card-right-arow">
              <p>Are there any prerequisites for the courses?</p>
              <img src="/pricing-card/add.png" class="mark0s" alt="" />
            </div>
            <div class="last-card-right-arow">
              <p>Can I download the course materials for offline access?</p>
              <img src="/pricing-card/add.png" class="mark0s" alt="" />
            </div>
          </div>
        </div>
      </div>
        
        </>
    )
}