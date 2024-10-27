import React from "react";
import './Login.css'

export default function Login() {
    return(
        <>
        
        <div class="login-here">
        <div class="login-contener">
          <div class="para-contenat">
            <h2>Students Testimonials</h2>
            <p class="parac">
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
                    <img src="/loginimg/Image (18).png" alt="" />
                    <p>Sarah L</p>
                  </div>
                  <div class="intro-button">
                    <button>Read More </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="arrow-img">
              <img src="/loginimg/Button (7).png" alt="/" />
              <img src="/loginimg/Button (8).png" alt="/" />
            </div>
          </div>
          <div class="log">
            <div class="login-card">
              <h2>Login</h2>
              <p class="well-back">
                Welcome back! Please log in to access your account.
              </p>

              <form class="login-from">
                <div class="email1">
                  <label for="email">Email</label> <br />
                  <input type="email" placeholder="Enter your Email" />
                </div>

                <div class="email1">
                  <label for="Password">Password</label> <br />
                  <input type="password" placeholder="Enter your Password" />
                </div>
                <a href="" id="pass">Forgot Password?</a>
                <div class="cheak-box">
                  <input type="checkbox" />
                  {/* <!-- <p>Remember Me</p> --> */}
                  <p class="me">Remember Me</p>
                </div>

                <div class="log-button">
                  <a href="">Login</a>
                </div>

                 {/* <!-- line or line section write here --> */}
                 <div class="border-line">
                  <hr />
                  <p>OR</p>
                </div>

                {/* <!-- line of or here  --> */}

                <div class="log-button02">
                  <img src="/loginimg/Icon (5).png" alt="/" />
                  <a href="">Login with Google</a>
                </div>

                <div class="for-signup">
                  <p>Don't have an account?</p>
                  <a href="/">Sign Up</a>
                  <img src="/loginimg/Icon (6).png" alt="/" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

        
        </>
    )
}