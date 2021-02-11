import React from "react";
import styles from "./About.module.scss";

import aboutVideo from "../../Assets/cubix-video.webm";

const About = () => {
  return (
    <div className={styles.about}>
      <div >
        <section className={styles.aboutVideo}>
          <video src={aboutVideo} autoPlay={true} loop={true} />
        </section>
        <section className={styles.aboutVideoText}>
          <h1>About</h1>
          <p>
            Cubix is a software and mobile app development company with a
            world-class team of talented data scientists, developers, designers,
            mathematicians, engineers, and creative artists. We are motivated to
            build elegant and functional digital products that solve complex
            problems.
          </p>
          <button>LET'S GET STARTED</button>
        </section>
      </div>

      <div className={styles.aboutText}>
        <section><img src="https://www.cubix.co/themes/responsiv-clean/assets/images/about/cubix-about.jpg" alt="Setup Ave" /></section>
        <section><p>Work with the Tech Leader.</p><h3>Cubix brings ideas to life, leveraging modern technologies.</h3><p>Cubix started its journey in 2008 with a team of seven. Today, it has grown into a full-cycle, mobile-first software development company, with the highest team satisfaction in the industry, independent analyst recognition, and an ever-growing list of delighted clients who work with us again and again. We are proud to have worked with Estee Lauder, Clinique, Engro, Swatch Group, Politico, and OOMCO. We have helped dozens of startups with modern technologies.</p></section>
      </div>
    </div>
  );
};

export default About;
