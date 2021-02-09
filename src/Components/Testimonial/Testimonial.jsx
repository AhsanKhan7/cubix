import React from "react";
import styles from "./Testimonial.module.scss";

import Carousel from "react-elastic-carousel";

const Testimonial = () => {
  return (
    <>
      <section className={styles.testimonial}>
        <section className={styles.testimonialStart}>
          <h1>
            We develop enterprise-grade software solutions for businesses.
          </h1>
          <Carousel
            autoPlaySpeed={4000}
            showArrows={true}
            enableAutoPlay={true}
            disableArrowsOnEnd={true}
            showEmptySlots={true}
            pagination={false}
          >
            <section className={styles.testimonialSection}>
              <h4>
                “The team stood out because of their swift response time and
                patience. Cubix provided one contact person, which helped
                streamline project management and coordination. Not only did
                Cubix follow the budget and timeline, the team even offered
                additional services at no extra charge.”{" "}
              </h4>
              <h5>Karen Agresti, Founder</h5>
              <p>Nomidate</p>
            </section>
            <section className={styles.testimonialSection}>
              <h4>
                “Willing to accommodate nonprofit budgets, Cubix brought their
                robust experience to the project. They checked in consistently,
                and were communicative, easy to reach, and responsive. The
                Android app shows over 500 downloads to date.”{" "}
              </h4>
              <h5>Melissa Steward, VP of Marketing</h5>
              <p>National Fatherhood Intiative</p>
            </section>
            <section className={styles.testimonialSection}>
              <h4>
                “The app sparked interest in the market and attracted initial
                users, while receiving no complaints about its functionality or
                usability. Cubix excelled at addressing user experience
                concerns, communicating clearly, and investing in the project's
                potential.”{" "}
              </h4>
              <h5>John Yates, Founder</h5>
              <p>Pee Spots</p>
            </section>
            <section className={styles.testimonialSection}>
              <h4>
                {" "}
                “Thank you again for the successful launch of the 3M and
                Converse applications. Your dedication, hard-work, flexibility,
                patience and professionalism is recognized and appreciated. I
                would recommend Social Cubix to any company wishing to create
                their application!”{" "}
              </h4>
              <h5>Micheal Guzman, Director</h5>
              <p>Sapient</p>
            </section>
          </Carousel>
          <section className={styles.testimonialBottom}>
            <img
              src="https://www.cubix.co/storage/app/media/home/clutch-icon.svg"
              class="clutch-icon"
              width="30px"
              alt="Clutch Icon"
            />
            <span> 4.8 Rating on Clutch </span>
            <span>Top app developers</span>
          </section>
        </section>
      </section>
    </>
  );
};

export default Testimonial;
