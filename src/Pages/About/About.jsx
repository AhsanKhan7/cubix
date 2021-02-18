import React from "react";
import styles from "./About.module.scss";
import Testimonial from "../../Components/Testimonial/Testimonial";
import aboutVideo from "../../Assets/cubix-video.webm";

import Header from "../../Components/Header/Header";
import SideNav from "../../Components/Header/SideNav/SideNav";
import Footer from "../../Components/Footer/Footer";

const About = () => {
  return (
    <div className={styles.about}>
      <Header />
      <SideNav />
      <div>
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

      <div className={styles.aboutMiddle}>
        <div className={styles.aboutText}>
          <section>
            <img
              src="https://www.cubix.co/themes/responsiv-clean/assets/images/about/cubix-about.jpg"
              alt="Setup Ave"
            />
          </section>
          <section>
            <h6>Work with the Tech Leader.</h6>
            <h3>Cubix brings ideas to life, leveraging modern technologies.</h3>
            <p>
              Cubix started its journey in 2008 with a team of seven. Today, it
              has grown into a full-cycle, mobile-first software development
              company, with the highest team satisfaction in the industry,
              independent analyst recognition, and an ever-growing list of
              delighted clients who work with us again and again. We are proud
              to have worked with Estee Lauder, Clinique, Engro, Swatch Group,
              Politico, and OOMCO. We have helped dozens of startups with modern
              technologies.
            </p>
          </section>
        </div>
        <hr />
        <div className={styles.aboutHistory}>
          <div>
            <section>
              <h3>2008</h3>
            </section>
            <section>
              <p>Founded in</p>
            </section>
          </div>
          <div>
            <section>
              <h3>600+</h3>
            </section>
            <section>
              <p>Complete Projects</p>
            </section>
          </div>
          <div>
            <section>
              <h3>200+</h3>
            </section>
            <section>
              <p>Talented Cubixians</p>
            </section>
          </div>
          <div>
            <section>
              <h3>500+</h3>
            </section>
            <section>
              <p>Clients</p>
            </section>
          </div>
        </div>
      </div>

      <div className={styles.aboutRapid}>
        <div>
          <section>
            <h4>Startup partner program™</h4>
          </section>
          <section>
            <p>
              We have created Startup Partner Program™ for funding early stage
              startups. We make small investments in return for small stakes in
              the startups we build.
            </p>
          </section>
        </div>
        <div>
          <section>
            <h4>Rapid strategy workshop™</h4>
          </section>
          <section>
            <p>
              Building a successful product is an art. The dozens of clients
              have used our Rapid Strategy Workshop™ model to get multi-million
              dollar revenue and valuations.
            </p>
          </section>
        </div>
        <div>
          <section>
            <h4>Rapid mvp development™</h4>
          </section>
          <section>
            <p>
              Do you want to test the idea with minimum investment and time? –
              Build Minimum Viable Product through our Rapid MVP Development™.
            </p>
          </section>
        </div>
      </div>

      <div className={styles.aboutPics}>
        <h2>Our creative heads build beautiful digital products.</h2>
        <p>
          Software and mobile app development for businesses from across the
          globe.
        </p>

        <div className={styles.aboutPicsDiv}>
          <div className={styles.aboutPicsDiv1}>
            <img
              src="https://www.cubix.co/themes/responsiv-clean/assets/images/about/cubix-family-768x538.jpg"
              alt="Setup Ave"
            />
            <div className={styles.picText}>
              <section>
                <h4>
                  We are proud to have the best team of creative thinkers and
                  fantastic clients from across the world, trusting our
                  developing, designing, and branding.
                </h4>
              </section>
              <section>
                <h4>Our approach</h4>
                <p>
                  To be the number one choice for businesses when it comes to
                  digital product development, design, quality, and innovation.
                </p>
              </section>
            </div>
          </div>
          <div className={styles.aboutPicsDiv2}>
            <img
              src="https://www.cubix.co/themes/responsiv-clean/assets/images/about/about-cubix-side.jpg"
              alt="Setup Ave"
            />
            <section>
              <h4>Our mission</h4>
              <p>
                To help businesses become competitive with the power of digital
                innovation, outstanding design, and emerging technologies via
                building intelligent digital products.
              </p>
            </section>
          </div>
        </div>

        <div className={styles.mediaMention}>
          <h2>Media mentions</h2>
          <p>We stay in the news for our incredible tech achievements.</p>
          <div className={styles.mediaMentionDiv}>
            <section>
              <img src="https://www.cubix.co/themes/responsiv-clean/assets/images/about/yahoo-logo.svg" />
              <h5>There's finally a dating app for people with disabilities</h5>
            </section>
            <section>
              <img src="https://www.cubix.co/themes/responsiv-clean/assets/images/about/BuzzFeed-logo.svg" />
              <h5>
                A new app just launched to make online dating more inclusive...
              </h5>
            </section>
            <section>
              <img src="https://www.cubix.co/themes/responsiv-clean/assets/images/about/mashable-logo.svg" />
              <h5>
                This startup helps you donate to charity when you see an
                infuriating tweeet
              </h5>
            </section>
          </div>
        </div>

        <div className={styles.ceoPic}>
          <img src="https://www.cubix.co/themes/responsiv-clean/assets/images/about/salman-lakhani-ceo-cubixinc.jpg" />
        </div>

        <div className={styles.headQuater}>
          <h2>Headquartered in west palm beach, florida</h2>
          <p>
            Cubix has maintained an unbroken record of successful custom
            software architecture and development since 2008, across startups,
            enterprises, and Fortune 500 Companies, including PayPal, Tissot,
            Estee Lauder, Politico, Walmart, Sapient, and Canon.
          </p>

          <div className={styles.headQuaterPic}>
            <section>
              <img src="https://www.cubix.co/themes/responsiv-clean/assets/images/about/politico.png" />
            </section>
            <section>
              <img src="https://www.cubix.co/themes/responsiv-clean/assets/images/about/bigfish-logo.png" />
            </section>
            <section>
              <img src="https://www.cubix.co/themes/responsiv-clean/assets/images/about/walmart.png" />
            </section>
            <section>
              <img src="https://www.cubix.co/themes/responsiv-clean/assets/images/about/tissot-logo-1.png" />
            </section>
            <section>
              <img src="https://www.cubix.co/themes/responsiv-clean/assets/images/about/sapient-logo-1.png" />
            </section>
          </div>
          <div className={styles.headQuaterPic}>
            <section>
              <img src="https://www.cubix.co/themes/responsiv-clean/assets/images/about/dreamworks-logo.png" />
            </section>
            <section>
              <img src="https://www.cubix.co/themes/responsiv-clean/assets/images/about/canon-logo-1.png" />
            </section>
            <section>
              <img src="https://www.cubix.co/themes/responsiv-clean/assets/images/about/datastream.png" />
            </section>
            <section>
              <img src="https://www.cubix.co/themes/responsiv-clean/assets/images/about/artizone-logo.png" />
            </section>
            <section>
              <img src="https://www.cubix.co/themes/responsiv-clean/assets/images/about/whitecastle-logo.png" />
            </section>
          </div>
        </div>

        <div className={styles.liveOffice}>
          <h2>Live from our office</h2>
          <p>
            Talent wins games, but teamwork and intelligence wins championships
          </p>

          <div className={styles.liveOfficeVideo}>
            <section>
              <iframe
                width="360"
                height="300"
                src="https://www.youtube.com/embed/OjhGYfKQzDY"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </section>
            <section>
              <iframe
                width="360"
                height="300"
                src="https://www.youtube.com/embed/NNImZnlhnN8"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </section>
            <section>
              <iframe
                width="360"
                height="300"
                src="https://www.youtube.com/embed/W_83Svhs_UA"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </section>
          </div>
        </div>
        <Testimonial />
      </div>
      <Footer />
    </div>
  );
};

export default About;
