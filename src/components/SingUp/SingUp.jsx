import React from "react";

import './SingUp.css'


export default function Singup(){
    return(
        <>
        
        <div class="login-here">
      <div class="login-contener">
        <div class="para-contenat">
          <h2>Students Testimonials</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
            eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac
            cum eget habitasse in velit fringilla feugiat senectus in.
          </p>
          <div class="intro-card">
            <div class="intro-card-1">
              <div class="intro-para">
                <p>
                  The web design course provided a solid foundation for me.
                  The instructors were knowledgeable and supportive, and the
                  interactive learning environment was engaging. I highly
                  recommend it!
                </p>
              </div>

              <div class="intro-img">
                <div class="img-person">
                  <img src="/Sign-Up-page/Image (20).png" alt="" />
                  <p>Sarah L</p>
                </div>
                <div class="intro-button">
                  <button>Read Full Story</button>
                </div>
              </div>
            </div>
          </div>

          <div class="arrow-img">
            <img src="/loginimg/Button (7).png" alt="/"/>
            <img src="/loginimg/Button (8).png" alt="/"/>
          </div>

        </div>
        <div class="log">
          <div class="login-card">
            <h2>Sign Up</h2>
            <p class="log-2">Create an account to unlock exclusive features.</p>

            <form class="login-from">
              <div class="email1">
                <label for="email">Full Name</label> <br />
                <input type="email" placeholder="Enter your Email" />
              </div>

              <div class="email1">
                <label for="Password">Email</label> <br />
                <input type="password" placeholder="Enter your Password" />
              </div>

              <div class="email1">
                <label for="Password">Password</label> <br />
                <input type="password" placeholder="Enter your Password" />
              </div>

              <a href="" id="pass">Forgot Password?</a>
              <div class="Check-box">
                <input type="checkbox"/>
                <p>I agree with Terms of Use and Privacy Policy</p>
              </div>

              <div class="price-button">
                <button>Sign Up</button>
              </div>
            </form>
          </div>

          {/* <!-- line or line section write here --> */}
          <div class="border-line">
            <hr/>
            <p>OR</p>
          </div>

          <div class="google-button">
            <img src="/Sign-Up-page/Icon (7).png" alt="" />
            <button>Sign Up with Google</button>
          </div>

          {/* <!-- <div class="javed-button">
                <button>Already have an account? Login</button>
                <img src="/Sign-Up-page/Vector (1).png" alt="">
              </div> --> */}

          <div class="for-signup">
            <p>Don't have an account? </p>
            <a href="/">Sign Up</a>
            <img src="/loginimg/Icon (6).png" alt="/"/>
          </div>

        </div>
      </div>
    </div>
        
        </>
    )
}