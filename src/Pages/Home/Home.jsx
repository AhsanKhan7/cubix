import React from "react";
import styles from "./home.module.scss";
import FrontPic1 from "../../Assets/frontPic1.jpg";

import phone from "../../Assets/smartphone.svg";
import game from "../../Assets/game.svg";
import web from "../../Assets/web.svg";
import blockchain from "../../Assets/blockchain.svg";

import Testimonial from "../../Components/Testimonial/Testimonial";
import Awards from "../../Components/Awards/Awards";
import Partners from "../../Components/Partners/Partners";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <div className={styles.home}>
      <Header />
      <section className={styles.frontBanner}>
        <section>
          <img src={FrontPic1} />
        </section>
        <section className={styles.frontText}>
          <h1>
            Revolutionizing
            <br /> enterprises digitally{" "}
          </h1>
          <p>
            Unlock the potential of enterprise portals by integrating data
            repositories and content management system into a single system that
            delivers seamless user experience.
          </p>
          <button>LET'S TALK</button>
        </section>
        <section className={styles.frontAwards}>
          <section className={styles.frontAwards1}>
            <ul>
              <li>
                <p>Trusted by</p>
              </li>
              <li>
                <img
                  src="https://www.cubix.co/storage/app/media/home/politico-small.png"
                  alt="Politico Logo"
                />
              </li>
              <li>
                <img
                  src="https://www.cubix.co/storage/app/media/home/wall-mart-small.png"
                  alt="Wall Mart Logo"
                />
              </li>
              <li>
                <img
                  src="https://www.cubix.co/storage/app/media/home/tissot-small.png"
                  alt="Tissot Logo"
                />
              </li>
              <li>
                <img
                  src="https://www.cubix.co/storage/app/media/home/sapient-small.png"
                  alt="Sapient Logo"
                />
              </li>
            </ul>
          </section>
          <section className={styles.frontAwards2}>
            <ul>
              <li>
                <p>Awards</p>
              </li>
              <li>
                <img
                  src="https://www.cubix.co/themes/responsiv-clean/assets/images/home/badge-top-app-company-united-states.png"
                  alt="appfutura"
                />
              </li>
              <li>
                <img
                  src="https://www.cubix.co/themes/responsiv-clean/assets/images/home/top-mobile-app-developers.png"
                  alt="goodfirms"
                />
              </li>
              <li>
                <img
                  src="https://www.cubix.co/themes/responsiv-clean/assets/images/home/mobile-appnew-2019.png"
                  alt="Cubix Awarded Top Rated App Development Companies"
                />
              </li>
              <li>
                <img
                  src="https://www.cubix.co/themes/responsiv-clean/assets/images/home/app_development_compay1.png"
                  alt="Mobile App Daily - Top Mobile App Development Company"
                />
              </li>
            </ul>
          </section>
        </section>
      </section>

      {/* end front banner */}
      <section className={styles.home2}>
        <section className={styles.home2Text}>
          <p>DESIGN. DEVELOPMENT. CONSULTANCY.</p>
          <h1>
            Cubix develops result-driven products for entrepreneurs, startups
            and enterprises.
          </h1>
        </section>
        <section className={styles.home2Features}>
          <section className={styles.home2FeaturesDesc}>
            <img src={phone} />
            <h4>
              App
              <br /> Development
            </h4>
          </section>
          <section className={styles.home2FeaturesDesc}>
            <img src={game} />
            <h4>
              Game
              <br /> Development
            </h4>
          </section>
          <section className={styles.home2FeaturesDesc}>
            <img src={web} />
            <h4>
              Web
              <br /> Development
            </h4>
          </section>
          <section className={styles.home2FeaturesDesc}>
            <img src={blockchain} />
            <h4>
              Blockchain
              <br /> Development
            </h4>
          </section>
        </section>
      </section>

      {/* end features */}
      <section className={styles.home3Projects}>
        <section className={styles.home3ProjectsHeading}>
          <h1>We love transforming product ideas to digital realities.</h1>
        </section>
        <section className={styles.home3Project1}>
          <section className={styles.home3Project1Image}>
            <img
              src="https://www.cubix.co/themes/responsiv-clean/assets/images/home/foodly-mobile-2-opt.png"
              class="section1-image-2-trans"
              alt="Foodly Mobile App with Order Tracking Feature"
            />
          </section>
          <section className={styles.home3Project1Desc}>
            <img
              src="https://www.cubix.co/themes/responsiv-clean/assets/images/home/foodly-sec-icn.png"
              class=""
              alt="Foodly Icon"
            />
            <p>MOBILE APP</p>
            <h3>Foodly - the hub of delicious cuisines</h3>
            <p>
              Order breakfast, lunch, or dinner, rate your favorite restaurants
              and track your order - one platform to curb your hunger.
            </p>
            <button>VIEW CASE STUDY</button>
          </section>
        </section>
        {/* project2 */}
        <section className={styles.home3Project2}>
          <section className={styles.home3Project2Desc}>
            <img
              src="https://www.cubix.co/themes/responsiv-clean/assets/images/home/hictic-logo-icn.png"
              class="mt-sm-10-own"
              alt="HicTic Mobile App - Solution for Your Marketing Campaign"
            />
            <p>MOBILE APP</p>
            <h3>
              Hictic - revolutionizing traditional avertising & digital
              marketing
            </h3>
            <p>
              Launch new adverts and engage with your customers - an all-in-one
              platform that promotes your brand and builds engagement.
            </p>
            <button>VIEW CASE STUDY</button>
          </section>
          <section className={styles.home3Project2Image}>
            <img
              src="https://www.cubix.co/themes/responsiv-clean/assets/images/home/hictic-mobile-1-opt.png"
              class="section2-image-2-trans"
              alt="HicTic Mobile Application Interface"
            />
          </section>
        </section>
        {/* project3 */}

        <section className={styles.home3Project1}>
          <section className={styles.home3Project1Image}>
            <img
              src="https://www.cubix.co/themes/responsiv-clean/assets/images/home/curious-mobile-1-opt.png"
              class="section1-image-2-trans"
              alt="Curious Mobile Application - Social Platform"
            />
          </section>
          <section className={styles.home3Project1Desc}>
            <img
              src="https://www.cubix.co/themes/responsiv-clean/assets/images/home/curious-logo-icn.png"
              class="mt-sm-7-own"
              alt="Curious Mobile App - Connect Globally"
            />
            <p>MOBILE APP</p>
            <h3>
              Curious - a social platform to connect globally with complete
              anonymity
            </h3>
            <p>
              Get insights into the latest happenings and connect with people of
              similar interests in your vicinity with complete anonymity.
            </p>
            <button>VIEW CASE STUDY</button>
          </section>
        </section>
      </section>
      {/* testimonail */}
      <Testimonial />
      {/* awards */}
      <Awards />
      {/* partners */}
      <Partners />
      {/* home end */}
      <Footer />
    </div>
  );
};

export default Home;
