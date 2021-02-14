import React from "react";
import styles from "./Services.module.scss";

import Testimonial from "../../Components/Testimonial/Testimonial";
import Awards from "../../Components/Awards/Awards";

import serviceBackground from "../../Assets/serviceBackground.jpg";
import project1Pic from "../../Assets/services-page-one.jpg";
import project2Pic from "../../Assets/services-page-two.jpg";
import project3Pic from "../../Assets/service-page-three.jpg";
import project4Pic from "../../Assets/service-page-four.jpg";

const Services = () => {
  return (
    <div className={styles.service}>
      <div className={styles.serviceTop}>
        <section>{/* <img src={serviceBackground} alt="bgImage" /> */}</section>
        <section className={styles.serviceTopText}>
          <h1>World-class software solutions for business across the globe.</h1>
          <p>Design. Development. Consultancy.</p>
        </section>
      </div>

      <div className={styles.serviceProgress}>
        <section className={styles.serviceProgressSection1}>
          <p>DISCOVERY . DESING . DEVELOPMENT . TESTING</p>
          <h1>Digital demand thrives in our hands</h1>
          <p>
            We bring to you award-winning products, excellent UI/UX, and a
            world-class tech talent of web and mobile arena that bridges the gap
            between the creative and technology world. At Cubix, our solutions
            become a technology brand that others take inspiration from.
          </p>
        </section>
        <div className={styles.serviceProgressSection2}>
          <section>
            <h1>23%</h1> <h6>INCREASED RESPONSE TIME</h6>
          </section>
          <section>
            <h1>88%</h1> <h6>FASTER DELIVERY TIME</h6>
          </section>
          <section>
            <h1>97%</h1> <h6>CLIENT SATISFACTION INDEX</h6>
          </section>
          <section>
            <h1>70%</h1> <h6>CLIENT RETENTION RATE</h6>
          </section>
        </div>
      </div>

      <div className={styles.serviceProjects}>
        <section className={styles.serviceProject1}>
          <section className={styles.serviceProject1_1}>
            <h1>01</h1>
            <h2>Ideation and evaluation</h2>
            <h6>
              Enterprises are fast adopting technology to improve their
              productivity, bring efficiency, and remove barriers preventing
              free and timely flow of information within the enterprise.
            </h6>
            <p>Rapid Strategy Workshop™</p>
            <p>Define project value proposition</p>
            <p>
              Identify development and deployment requirements + constraints.
            </p>
            <p>Perform market research - comparative applications/products.</p>
            <p>Identify key opportunities for the feature set.</p>
            <p>Growth Hacking</p>
          </section>
          <section className={styles.serviceProject1_2}>
            <img src={project1Pic} alt="project1Pic" />
          </section>
        </section>

        <section className={styles.serviceProject2}>
          <section className={styles.serviceProject2_2}>
            <img src={project2Pic} alt="project2Pic" />
          </section>
          <section className={styles.serviceProject2_1}>
            <h1>02</h1>
            <h2>Product design</h2>
            <h6>
              Our products undergo vigorous analysis to craft user-centric,
              result-driven, and industry-specific designs. We design to enhance
              user engagement and improve user experience, with intriguing
              concepts.
            </h6>
            <p>Conceptualization exercise with project stakeholders.</p>
            <p>Creating a project style guide.</p>
            <p>Developing user experience wireframes for key page types.</p>
            <p>User interface mockups based on approved wireframes.</p>
            <p>Building Clickable rapid prototyping.</p>
            <p>Creating user experience</p>
          </section>
        </section>

        <section className={styles.serviceProject3}>
          <section className={styles.serviceProject3_1}>
            <h1>03</h1>
            <h2>Development</h2>
            <h6>
              We leverage modern technologies and innovative minds to develop
              dynamic software solutions for multiple platforms, helping clients
              introduce a one-of-a-kind solution to the audience.
            </h6>
            <p>MOBILE APPs (iOS & Android)</p>
            <p>Game Development</p>
            <p>Web Development</p>
            <p>Business Intelligence</p>
            <p>Big Data</p>
            <p>Artificial Intelligence and Machine Learning</p>
          </section>
          <section className={styles.serviceProject3_2}>
            <img src={project3Pic} alt="project3Pic" />
          </section>
        </section>

        <section className={styles.serviceProject4}>
          <section className={styles.serviceProject4_2}>
            <img src={project4Pic} alt="project4Pic" />
          </section>
          <section className={styles.serviceProject4_1}>
            <h1>04</h1>
            <h2>Testing</h2>
            <h6>
              We take Quality Assurance very seriously. Each project we take on
              goes through numerous iterations of testing to ensure smooth
              performance, user-friendliness, and bulletproof security.
            </h6>
            <p>Application Testing</p>
            <p>Load Testing</p>
            <p>API Testing</p>
            <p>Version Control</p>
            <p>Test Automation</p>
            <p>Security Testing</p>
          </section>
        </section>
      </div>
      <Testimonial />
      <Awards />
    </div>
  );
};

export default Services;
