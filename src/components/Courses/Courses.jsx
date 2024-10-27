import React from "react";

import './Courses.css'
import { NavLink } from "react-router-dom";


export default function Courses(){
    return(
        <>
        
        
        <div class="hero1">
            <h1>Online Courses on Design and Development</h1>
            <p>
                Welcome to our online course page, where you can enhance your skills in design and development.
                Choose from our carefully curated selection of 10 courses designed to provide you with
                comprehensive knowledge and practical experience.
                Explore the courses below and find the perfect fit for your learning journey.
            </p>
        </div>

        {/* <!-- ----------------------web design card-----------------------------  --> */}

        <div class="web-design">

            <div class="webcards">

                <div class="webimg">


                    <div class="courses-view">
                        <div class="courses-head">
                            <div class="courses-text">
                                <h2>Web Design Fundamentals</h2>
                                <p>Learn the fundamentals of web design, including HTML, CSS, and responsive design
                                    principles.
                                    Develop the skills to create visually appealing and user-friendly websites
                                    .</p>
                            </div>

                            <div class="view">
                                <NavLink to="/CourseOpen">View Course</NavLink>
                         </div>
                        </div>
                    </div>

                    <div class="imgweb">
                        <img src="course-image/Image01.png" alt=""/>
                        <img src="course-image/Image02.png" alt=""/>
                        <img src="course-image/Image 03.png" alt=""/>

                    </div>
                    <div class="p">
                        <p> <span class="week">4 weeks</span> <span class="week">Beginner</span> </p>
                        <b>By John Smith</b>
                    </div>

                    <div class="weblast">

                        <div class="hadding-curr">
                            <h4>Curriculum</h4>
                        </div>

                        <div class="num">
                            <div class="i01">
                                <h1>01</h1>
                                <p>Introduction to HTML</p>
                            </div>
                            <div class="i01">
                                <h1>02</h1>
                                <p>Styling with CSS</p>
                            </div>
                            <div class="i01">
                                <h1>03</h1>
                                <p>Introduction to Responsive Design</p>
                            </div>
                            <div class="i01">
                                <h1>04</h1>
                                <p>Design Principles for Web</p>
                            </div>
                            <div class="i01">
                                <h1>05</h1>
                                <p>Building a Basic Website</p>
                            </div>
                        </div>
                    </div>


                </div>

            </div>


            {/* <!-- ---------------------card 2------------------ --> */}

            <div class="webcards">

                <div class="webimg">


                    <div class="courses-view">
                        <div class="courses-head">
                            <div class="courses-text">
                                <h2>UI/UX Design</h2>
                                <p>
                                    Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX).
                                     Learn design principles, wireframing, prototyping, and usability testing techniques.
                                </p>
                            </div>

                            <div class="view">
                            <NavLink to="/CourseOpen">View Course</NavLink>

                            </div>
                        </div>
                    </div>

                    <div class="imgweb">
                        <img src="course-image/Image.png" alt=""/>
                        <img src="course-image/Image (1).png" alt=""/>
                        <img src="course-image/Image (2).png" alt=""/>

                    </div>
                    <div class="p">
                        <p> <span class="week">6 weeks</span> <span class="week">Intermediate</span> </p>
                        <b>By Emily Johnson</b>
                    </div>

                    <div class="weblast">

                        <div class="hadding-curr">
                            <h4>Curriculum</h4>
                        </div>

                        <div class="num">
                            <div class="i01">
                                <h1>01</h1>
                                <p>Introduction to UI/UX Design</p>
                            </div>
                            <div class="i01">
                                <h1>02</h1>
                                <p>User Research and Personas</p>
                            </div>
                            <div class="i01">
                                <h1>03</h1>
                                <p>Wireframing and Prototyping</p>
                            </div>
                            <div class="i01">
                                <h1>04</h1>
                                <p>Visual Design and Branding</p>
                            </div>
                            <div class="i01">
                                <h1>05</h1>
                                <p>Usability Testing and Iteration</p>
                            </div>
                        </div>
                    </div>


                </div>

            </div>            

            {/* <!-- ---------------------card 3------------------ --> */}

            <div class="webcards">

                <div class="webimg">


                    <div class="courses-view">
                        <div class="courses-head">
                            <div class="courses-text">
                                <h2>Mobile App Development</h2>
                                <p>
                                    Dive into the world of mobile app development. Learn to build native iOS and 
                                    Android applications using industry-leading frameworks like Swift and Kotlin.
                                </p>
                            </div>

                            <div class="view">
                            <NavLink to="/CourseOpen">View Course</NavLink>

                            </div>
                        </div>
                    </div>

                    <div class="imgweb">
                        <img src="course-image/Image (3).png" alt=""/>
                        <img src="course-image/Image (4).png" alt=""/>
                        <img src="course-image/Image (5).png" alt=""/>

                    </div>
                    <div class="p">
                        <p> <span class="week">8 weeks</span> <span class="week">Intermediate</span> </p>
                        <b>By David Brown</b>
                    </div>

                    <div class="weblast">

                        <div class="hadding-curr">
                            <h4>Curriculum</h4>
                        </div>

                        <div class="num">
                            <div class="i01">
                                <h1>01</h1>
                                <p>Introduction to Mobile App Development</p>
                            </div>
                            <div class="i01">
                                <h1>02</h1>
                                <p>Fundamentals of Swift Programming (iOS)</p>
                            </div>
                            <div class="i01">
                                <h1>03</h1>
                                <p>Fundamentals of Kotlin Programming (Android)</p>
                            </div>
                            <div class="i01">
                                <h1>04</h1>
                                <p>Building User Interfaces</p>
                            </div>
                            <div class="i01">
                                <h1>05</h1>
                                <p>App Deployment and Testing</p>
                            </div>
                        </div>
                    </div>


                </div>

            </div>

            {/* <!-- ---------------------card 4------------------ --> */}

            <div class="webcards">

                <div class="webimg">


                    <div class="courses-view">
                        <div class="courses-head">
                            <div class="courses-text">
                                <h2>Graphic Design for Beginners</h2>
                                <p>
                                    Discover the fundamentals of graphic design, including typography, color theory,
                                     layout design, and image manipulation techniques. Create visually stunning 
                                     designs for print and digital media.
                                </p>
                            </div>

                            <div class="view">
                            <NavLink to="/CourseOpen">View Course</NavLink>

                            </div>
                        </div>
                    </div>

                    <div class="imgweb">
                        <img src="course-image/Image (6).png" alt=""/>
                        <img src="course-image/Image (7).png" alt=""/>
                        <img src="course-image/Image (8).png" alt=""/>

                    </div>
                    <div class="p">
                        <p> <span class="week">10 weeks</span> <span class="week">Beginner</span> </p>
                        <b>By Sarah Thompson</b>
                    </div>

                    <div class="weblast">

                        <div class="hadding-curr">
                            <h4>Curriculum</h4>
                        </div>

                        <div class="num">
                            <div class="i01">
                                <h1>01</h1>
                                <p>Introduction to Graphic Design</p>
                            </div>
                            <div class="i01">
                                <h1>02</h1>
                                <p>Typography and Color Theory</p>
                            </div>
                            <div class="i01">
                                <h1>03</h1>
                                <p>Layout Design and Composition</p>
                            </div>
                            <div class="i01">
                                <h1>04</h1>
                                <p>Image Editing and Manipulation</p>
                            </div>
                            <div class="i01">
                                <h1>05</h1>
                                <p>Designing for Print and Digital Media</p>
                            </div>
                        </div>
                    </div>


                </div>

            </div>

            {/* <!-- ---------------------card 5------------------ --> */}

            <div class="webcards">

                <div class="webimg">


                    <div class="courses-view">
                        <div class="courses-head">
                            <div class="courses-text">
                                <h2>Front-End Web Development</h2>
                                <p>
                                    Become proficient in front-end web development. Learn HTML, CSS, JavaScript, 
                                    and popular frameworks like Bootstrap and React. Build interactive and responsive websites.
                                </p>
                            </div>

                            <div class="view">
                            <NavLink to="/CourseOpen">View Course</NavLink>

                            </div>
                        </div>
                    </div>

                    <div class="imgweb">
                        <img src="course-image/Image (9).png" alt=""/>
                        <img src="course-image/Image (10).png" alt=""/>
                        <img src="course-image/Image (11).png" alt=""/>

                    </div>
                    <div class="p">
                        <p> <span class="week">10 weeks</span> <span class="week">Intermediate</span> </p>
                        <b>By Michael Adams</b>
                    </div>

                    <div class="weblast">

                        <div class="hadding-curr">
                            <h4>Curriculum</h4>
                        </div>

                        <div class="num">
                            <div class="i01">
                                <h1>01</h1>
                                <p>HTML Fundamentals</p>
                            </div>
                            <div class="i01">
                                <h1>02</h1>
                                <p>CSS Styling and Layouts</p>
                            </div>
                            <div class="i01">
                                <h1>03</h1>
                                <p>JavaScript Basics</p>
                            </div>
                            <div class="i01">
                                <h1>04</h1>
                                <p>Building Responsive Websites</p>
                            </div>
                            <div class="i01">
                                <h1>05</h1>
                                <p>Introduction to Bootstrap and React</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        
        </>
    )
}