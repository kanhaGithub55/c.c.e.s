import React from "react";

import './About.css'

export default function About(){
    return(
        <>
        
        
  <div class="container01">
    <div class="inner-cont-text">
      <div class="text-heading">
        <h1>About Skillbridge</h1>
      </div>
      <div class="text-paragraph">
        <p>Welcome to our platform, where we are passionate about empowering individuals to master the world of design
          and development. We offer a wide range of online courses designed to equip learners with the skills and
          knowledge needed to succeed in the ever-evolving digital landscape.</p>
      </div>
    </div>
  </div>
  <hr id="line"/>

  {/* <!-- Container-1  --> */}

  <div class="container01">
    <div class="inner-cont-text-1">
      <h2>Achievements</h2>
      <p>
        Our commitment to excellence has led us to achieve significant milestones along our journey. Here are some of
        our
        notable achievements
      </p>
    </div>

    {/* <!-- Sub-Container  --> */}

    <div class="card-container">
      <div class="card">
        <img src="About-page/i1.png" alt="/"/>
        <h5>Trusted by Thousands</h5>
        <p>We have successfully served thousands of students, helping them unlock their potential and achieve their
          career goals.</p>
      </div>
      <div class="card">
        <img src="About-page/i2.png" alt="/"/>
        <h5>Award-Winning Courses</h5>
        <p>Our courses have received recognition and accolades in the industry for their quality, depth of content, and
          effective teaching methodologies.</p>
      </div>
    </div>

    <div class="card-container">
      <div class="card">
        <img src="About-page/i3.png" alt="/"/>
        <h5>Positive Student Feedback</h5>
        <p>We take pride in the positive feedback we receive from our students, who appreciate the practicality and
          relevance of our course materials.</p>
      </div>
      <div class="card">
        <img src="About-page/i4.png" alt="/"/>
        <h5>Industry Partnerships</h5>
        <p>We have established strong partnerships with industry leaders, enabling us to provide our students with
          access to the latest tools and technologies</p>
      </div>
    </div>
 </div>


  <div class="container01">
    <div class="inner-cont-text-1">
      <h2>Our Goals</h2>
      <p>
        At SkillBridge, our goal is to empower individuals from all backgrounds to thrive in the world of design and
        development. We believe that education should be accessible and transformative, enabling learners to pursue
        their passions and make a meaningful impact.

      </p>
      <p>Through our carefully crafted courses, we aim to</p>
    </div>

    {/* <!-- Sub-Container  --> */}

    <div class="card-container">
      <div class="card">
        <img src="About-page/i5.png" alt=""/>
        <h5>Provide Practical Skills</h5>
        <p>We focus on delivering practical skills that are relevant to the current industry demands. Our courses are
          designed to equip learners with the knowledge and tools needed to excel in their chosen field.
        </p>
      </div>
      <div class="card">
        <img src="About-page/i6.png" alt=""/>
        <h5>Foster Creative Problem-Solving</h5>
        <p>We encourage creative thinking and problem-solving abilities, allowing our students to tackle real-world
          challenges with confidence and innovation.
        </p>
      </div>
    </div>

    <div class="card-container">
      <div class="card">
        <img src="About-page/i7.png" alt=""/>
        <h5>Promote Collaboration and Community</h5>
        <p>We believe in the power of collaboration and peer learning. Our platform fosters a supportive and inclusive
          community where learners can connect, share insights, and grow together. </p>
      </div>
      <div class="card">
        <img src="About-page/i8.png" alt=""/>
        <h5>Stay Ahead of the Curve</h5>
        <p>The digital landscape is constantly evolving, and we strive to stay at the forefront of industry trends. We
          regularly update our course content to ensure our students receive the latest knowledge and skills.</p>
      </div>
    </div>





    <div class="last-card-1">
        <div>
          <h1><span>Together</span>, let's shape the future of digital innovation</h1>
          <p>Join us on this exciting learning journey and unlock your potential in design and development.</p>
        </div>
        <div>
          <button>Join Now</button>
        </div>
      </div>

  </div>
        
        </>
    )
}