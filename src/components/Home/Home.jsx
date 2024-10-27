import React from "react";

import './Home.css'

// import homePageImages from  './assets/homePageImages'


// import reactLogo from './assets/react.svg'



export default function Home() {
    return(
        <>
        
        {/* <!-- ----------------------------------hero section--------------------- --> */}
        <div class="hero1">

            <div class="hero">

                <div class="hero-heading">

                    <div class="sub-hero">
                        <img src="/homePageImages/Icon Container.png" alt=""/>
                        <h1 class="heading"><span class="Unlock">Unlock</span> Your Creative Potential</h1>
                    </div>

                    <div class="text-hero">
                        <h2 class="hero-h2">with Online Design and Development Courses.</h2>
                        <p id="hero-h2-p">Learn from Industry Experts and Enhance Your Skills.</p>
                    </div>
                </div>

                <div class="button2">
                    <a href="/courses/index..html">Explore Courses</a>
                    <a href="/pricing-card/index.html">View Pricing</a>
                </div>
            </div>
        </div>


        {/* <!-- -----------------------------logo section---------------------------------- --> */}
        <div class="logo-head">
            <div class="logos">
                <img src="/homePageImages/Logo(0).png" alt=""/>
                <img src="/homePageImages/Logo (01).png" alt=""/>
                <img src="/homePageImages/Logo (02).png" alt=""/>
                <img src="/homePageImages/Logo(03).png" id="logos-non" alt=""/>
                <img src="/homePageImages/Logo (04).png" id="logos-non" alt=""/>
                <img src="/homePageImages/Logo (05).png" id="logos-non" alt=""/>
                <img src="/homePageImages/Logo (07).png" id="logos-non" alt=""/>

            </div>
        </div>

        {/* <!-- -----------------------video section---------------- --> */}

        <div class="image">
            <img src="/homePageImages/Container.png" alt=""/>
        </div>

        {/* <!-- ------------------------------------benifit section------------------------------------ --> */}


        <div class="benifit">

            <div class="benifit-view">
                <div class="benifit-head">
                    <div class="benifit-text">
                        <h1>Benefits</h1>
                        <p>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet
                            et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla
                            feugiat senectus in.</p>
                    </div>

                    <div class="view">
                        <a href="" id="view">view all</a>
                    </div>
                </div>
            </div>

            {/* <!-- ----------------------card section----------------- --> */}

            <div class="benefits-cards">
                <div class="benefit-card-01">
                    <div class="card">
                        <h1 class="card-h1">01</h1>
                        <h3>Flexible Learning Schedule</h3>
                        <p>Fit your coursework around your existing commitments and obligations.</p>
                        <img src="/homePageImages/Vector.png" class="card-img" alt=""/>
                    </div>
                    <div class="card">
                        <h1 class="card-h1">02</h1>
                        <h3>Expert Instruction</h3>
                        <p>Learn from industry experts who have hands-on experience in design and development.</p>
                        <img src="/homePageImages/Vector.png" class="card-img" alt=""/>
                    </div>
                    <div class="card">
                        <h1 class="card-h1">03</h1>
                        <h3>Diverse Course Offerings</h3>
                        <p>Explore a wide range of design and development courses covering various topics.</p>
                        <img src="/homePageImages/Vector.png" class="card-img" alt=""/>
                    </div>
                </div>

                <div class="benefit-card-02">
                    <div class="card">
                        <h1 class="card-h1">04</h1>
                        <h3>Updated Curriculum</h3>
                        <p>Access courses with up-to-date content reflecting the latest trends and industry practices.
                        </p>
                        <img src="/homePageImages/Vector.png" class="card-img" alt=""/>
                    </div>
                    <div class="card">
                        <h1 class="card-h1">05</h1>
                        <h3>Practical Projects and Assignments</h3>
                        <p>Develop a portfolio showcasing your skills and abilities to potential employers.</p>
                        <img src="/homePageImages/Vector.png" class="card-img" alt=""/>
                    </div>
                    <div class="card">
                        <h1 class="card-h1">06</h1>
                        <h3>Interactive Learning Environment</h3>
                        <p>Collaborate with fellow learners, exchanging ideas and feedback to enhance your
                            understanding.</p>
                        <img src="/homePageImages/Vector.png" class="card-img" alt=""/>
                    </div>
                </div>
            </div>
        </div>

        {/* <!-- -------------------------------courses section----------------------------------  --> */}


        <div class="courses">
            <div class="courses-01">

                <div class="courses-view">
                    <div class="courses-head">
                        <div class="courses-text">
                            <h1>Our Courses</h1>
                            <p>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet
                                et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla
                                feugiat senectus in.</p>
                        </div>

                        <div class="view">
                            <a href="/courses/index..html">View All</a>
                        </div>
                    </div>
                </div>

                {/* <!-- ----------------------courses card section----------------------- --> */}

                <div class="courses-main">
                    <div class="card01-course">

                        <div class="course-card-01">
                            <div class="design-card">
                                <img src="/homePageImages/Image.png" alt=""/>

                                <div class="p">
                                    <p> <span class="week">4 week</span> <span class="week">Beginner</span> </p>
                                    <b>By John Smith</b>
                                </div>

                                <div class="ben">
                                    <h4>Web Design Fundamentals</h4>
                                    <p>Learn the fundamentals of web design,
                                        including HTML, CSS, and responsive design principles.
                                        Develop the skills to create visually appealing
                                        and user-friendly websites.</p>

                                </div>

                                <div class="course-button">
                                    <a href="">Get It Now</a>
                                </div>

                            </div>
                        </div>

                        <div class="course-card-01">
                            <div class="design-card">
                                <img src="/homePageImages/Image (1).png" alt=""/>

                                <div class="p">
                                    <p> <span class="week">6 Weeks</span> <span class="week">Intermediate</span> </p>
                                    <b>By Emily Johnson</b>
                                </div>

                                <div class="ben">
                                    <h4>UI/UX Design</h4>
                                    <p>Master the art of creating intuitive user interfaces (UI) and enhancing user
                                        experiences (UX).
                                        Learn design principles, wireframing, prototyping, and usability testing
                                        techniques. </p>
                                </div>
                                <div class="course-button">
                                    <a href="">Get It Now</a>
                                </div>

                               
                            </div>
                        </div>

                    </div>

                    <div class="card01-course">

                        <div class="course-card-01">
                            <div class="design-card">
                                <img src="/homePageImages/Image (2).png" alt=""/>

                                <div class="p">
                                    <p> <span class="week">8 Weeks</span> <span class="week">Intermediate</span> </p>
                                    <b>By David Brown</b>
                                </div>
                                <div class="ben">
                                    <h4>Mobile App Development</h4>
                                    <p>Dive into the world of mobile app development. Learn to build native iOS and
                                        Android
                                        applications
                                        using industry-leading frameworks like Swift and Kotlin.</p>

                                </div>

                                <div class="course-button">
                                    <a href="">Get It Now</a>
                                </div>

                            </div>
                        </div>

                        <div class="course-card-01">
                            <div class="design-card">
                                <img src="/homePageImages/Image (3).png" alt=""/>

                                <div class="p">
                                    <p> <span class="week">10 Weeks</span> <span class="week">Beginner</span> </p>
                                    <b>By Sarah Thompson</b>
                                </div>

                                <div class="ben">
                                    <h4>Graphic Design for Beginners</h4>
                                    <p>Discover the fundamentals of graphic design, including typography,
                                        color theory, layout design, and image manipulation techniques.
                                        Create visually stunning designs for print and digital media.</p>

                                </div>
                                <div class="course-button">
                                    <a href="">Get It Now</a>
                                </div>

                            </div>
                        </div>



                    </div>

                    <div class="card01-course">

                        <div class="course-card-01">
                            <div class="design-card">
                                <img src="/homePageImages/Image (4).png" alt=""/>

                                <div class="p">
                                    <p> <span class="week">10 Weeks</span> <span class="week">Intermediate</span> </p>
                                    <b>By Michael Adams</b>
                                </div>

                                <div class="ben">
                                    <h4>Front-End Web Development</h4>
                                    <p>Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and
                                        popular frameworks
                                        like Bootstrap and React. Build interactive and responsive websites.</p>

                                </div>

                                <div class="course-button">
                                    <a href="">Get It Now</a>
                                </div>
                            </div>
                        </div>

                        <div class="course-card-01">
                            <div class="design-card">
                                <img src="/homePageImages/Image (5).png" alt=""/>

                                <div class="p">
                                    <p> <span class="week">6 Weeks</span> <span class="week">Advance</span> </p>
                                    <b>By Jennifer Wilson</b>
                                </div>

                                <div class="ben">
                                    <h4>Advanced JavaScript</h4>
                                    <p>Take your JavaScript skills to the next level. Explore advanced concepts like
                                        closures, prototypes, asynchronous programming,
                                        and ES6 features. Build complex applications with confidence.</p>

                                </div>
                                <div class="course-button">
                                    <a href="">Get It Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* <!-- ---------------------------Our Testimonials section-------------------------- --> */}

        <div class="testmonial">
            <div class="testmonial-1">

                <div class="courses-view">
                    <div class="courses-head">
                        <div class="courses-text">
                            <h1>Our Testimonials</h1>
                            <p>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet
                                et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla
                                feugiat senectus in.
                            </p>
                        </div>

                        <div class="view">
                            <a href="/pricing-card/index.html">View All</a>
                        </div>
                    </div>

                    {/* <!-- -----------------------------------testmonial card--------------  --> */}

                    <div class="test-card">
                        <div class="first-test-card">

                            <div class="Sarah-l">
                                <div class="test-1-p">
                                    <p>The web design course provided a solid foundation for me.
                                        The instructors were knowledgeable and supportive, and the interactive
                                        learning environment was engaging. I highly recommend it!
                                    </p>
                                </div>
                                <div class="img-sec">
                                    <div class="girl">
                                        <img src="/homePageImages/Image-girl.png" alt=""/>
                                        <p>Sarah L</p>
                                    </div>
                                    <a href="" class="read">Read Full Story</a>
                                </div>
                            </div>
                            <div class="Sarah-l">
                                <div class="test-1-p">
                                    <p>The UI/UX design course exceeded my expectations. The instructor's expertise and
                                        practical assignments helped
                                        me improve my design skills. I feel more confident in my career now. Thank you!
                                    </p>
                                </div>
                                <div class="img-sec">
                                    <div class="girl">
                                        <img src="/homePageImages/Image-boy.png" alt=""/    >
                                        <p>Jason M</p>
                                    </div>
                                    <a href="" class="read">Read Full Story</a>
                                </div>
                            </div>

                        </div>

                        <div class="first-test-card">

                            <div class="Sarah-l">
                                <div class="test-1-p">
                                    <p>The mobile app development course was fantastic! The step-by-step tutorials and
                                        hands-on projects helped me grasp the concepts easily. I'm now building my own
                                        app. Great course!
                                    </p>
                                </div>
                                <div class="img-sec">
                                    <div class="girl">
                                        <img src="/homePageImages/Image-girl-2.png" alt=""/>
                                        <p>Emily R</p>
                                    </div>
                                    <a href="" class="read">Read Full Story</a>
                                </div>
                            </div>
                            <div class="Sarah-l">
                                <div class="test-1-p">
                                    <p>I enrolled in the graphic design course as a beginner, and it was the perfect
                                        starting point. The instructor's guidance and feedback improved my design
                                        abilities significantly. I'm grateful for this course!
                                    </p>
                                </div>
                                <div class="img-sec">
                                    <div class="girl">
                                        <img src="/homePageImages/Image-boy-1.png" alt=""/>
                                        <p>Michael K</p>
                                    </div>
                                    <a href="" class="read">Read Full Story</a>
                                </div>
                            </div>

                        </div>


                    </div>


                </div>
            </div>

        </div>

        {/* <!-- ---------------------------------------------------pricing section-------------------------------------------------------------------------   --> */}


        <div class="pricing-view">
            <div class="pricing-head">
                <div class="pricing-text">
                    <h1>Our Pricing</h1>
                    <p>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit
                        id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget
                        habitasse in velit fringilla feugiat senectus in.</p>
                </div>
                <div class="view-pricing">
                    <a href="">Monthly</a>
                    <a href="">Yearly</a>
                </div>
            </div>
            {/* <!-- --------------------------------pricing card section------------------------ --> */}

            <div class="main-price">
                <div class="pricing">
                    <div class="price">
                        <div class="fee-text">
                            <p>View Plan</p>
                        </div>
                        <div class="price-rate">
                            <h1>$0</h1>
                            <p>/Month</p>
                        </div>


                        <div class="card-benifits">
                            <div>
                                <h4 class="feature">Available Features</h4>
                            </div>

                            <div class="lists">
                                <div class="list01">
                                    <img src="/homePageImages/Icon Container01.png" class="marks" alt=""/>
                                    <p>Access to selected free courses.</p>
                                </div>
                                <div class="list01">
                                    <img src="/homePageImages/Icon Container01.png" class="marks" alt=""/>
                                    <p>Limited course materials and resources.</p>
                                </div>
                                <div class="list01">
                                    <img src="/homePageImages/Icon Container01.png" class="marks" alt=""/>
                                    <p>Basic community support.</p>
                                </div>
                                <div class="list01">
                                    <img src="/homePageImages/Icon Container01.png" class="marks" alt=""/>
                                    <p>No certification upon completion.</p>
                                </div>
                                <div class="list01">
                                    <img src="/homePageImages/Icon Container01.png" class="marks" alt=""/>
                                    <p>Ad-supported platform.</p>
                                </div>
                                <div class="list01">
                                    <img src="/homePageImages/Icon Container02.png" class="marks" alt=""/>
                                    <p>Access to exclusive Pro Plan community forums.</p>
                                </div>
                                <div class="list01">
                                    <img src="/homePageImages/Icon Container02.png" class="marks" alt=""/>
                                    <p>Early access to new courses and updates.</p>
                                </div>


                            </div>

                            <div class="button0">
                                <button class="button1">Get Started</button>
                            </div>

                        </div>

                    </div>


                    <div class="price">
                        <div class="fee-text">
                            <p>Pro Plan</p>
                        </div>
                        <div class="price-rate">
                            <h1>$79</h1>
                            <p>/Month</p>
                        </div>


                        <div class="card-benifits">
                            <div>

                                <h4 class="feature">Available Features</h4>
                            </div>

                            <div class="lists">
                                <div class="list01">
                                    <img src="/homePageImages/Icon Container01.png" class="marks" alt=""/>
                                    <p>Unlimited access to all courses.</p>
                                </div>
                                <div class="list01">
                                    <img src="/homePageImages/Icon Container01.png" class="marks" alt=""/>
                                    <p>Unlimited course materials and resources.</p>
                                </div>
                                <div class="list01">
                                    <img src="/homePageImages/Icon Container01.png" class="marks" alt=""/>
                                    <p>Priority support from instructors.</p>
                                </div>
                                <div class="list01">
                                    <img src="/homePageImages/Icon Container01.png" class="marks" alt=""/>
                                    <p>Course completion certificates.</p>
                                </div>
                                <div class="list01">
                                    <img src="/homePageImages/Icon Container01.png" class="marks" alt=""/>
                                    <p>Ad-free experience.</p>
                                </div>
                                <div class="list01">
                                    <img src="/homePageImages/Icon Container01.png" class="marks" alt=""/>
                                    <p>Access to exclusive Pro Plan community forums.</p>
                                </div>
                                <div class="list01">
                                    <img src="/homePageImages/Icon Container01.png" class="marks" alt=""/>
                                    <p>Early access to new courses and updates.</p>
                                </div>


                            </div>

                            <div class="button0">
                                <button class="button1">Get Started</button>
                            </div>

                        </div>

                    </div>

                </div>
            </div>


        </div>


        {/* <!-- -------------------question section-------------------------- --> */}



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
                            <img src="homePageImages/wrong.png" class="mark0s" alt="" />
                        </div>
                        <p id="p">
                            Absolutely! You can enroll in multiple courses simultaneously and
                            access them at your convenience.
                        </p>
                        <div class="last-card-right-arow">
                            <p>Enrollment Process for Different Courses</p>
                            <img src="homePageImages/arrow.png" class="mark0s" alt="" />
                        </div>
                    </div>
                    <div class="last-card-right-arow">
                        <p>What kind of support can I expect from instructors?</p>
                        <img src="homePageImages/add.png" class="mark0s" alt="" />
                    </div>
                    <div class="last-card-right-arow">
                        <p>
                            Are the courses self-paced or do they have specific start and end
                            dates?
                        </p>
                        <img src="homePageImages/add.png" class="mark0s" alt="" />
                    </div>
                    <div class="last-card-right-arow">
                        <p>Are there any prerequisites for the courses?</p>
                        <img src="homePageImages/add.png" class="mark0s" alt="" />
                    </div>
                    <div class="last-card-right-arow">
                        <p>Can I download the course materials for offline access?</p>
                        <img src="homePageImages/add.png" class="mark0s" alt="" />
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
}