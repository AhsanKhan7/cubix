import React from "react";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerText}>
        <h2>
          12 years of building digital products and we are just getting started!
        </h2>
        <button>START A PROJECT</button>
      </div>

      <div className={styles.footerLocation}>
        <section>
          <strong>Florida</strong>
          <p>700 S. Rosemary Ave, Suite 204-118 West Palm Beach, FL 33401</p>
        </section>
        <section>
          <strong>Karachi</strong>
          <p>D23, Block 9 Clifton, Karachi, Sindh 75600, Pakistan</p>
        </section>
        <section>
          <strong>Dubai</strong>
          <p>Building 11, Level 7, Bay Square, Business Bay, UAE</p>
        </section>
        <section>
          <strong>Services</strong>
          <h6>iPhone App Development</h6>
          <h6>Android App Development</h6>
          <h6>Mobile App Development</h6>
        </section>
        <section>
          <strong>Apps</strong>
          <h6>Game App Development</h6>
          <h6>Sharepoint App Development</h6>
          <h6>Blockchain App Development</h6>
        </section>
      </div>

      <div className={styles.bottomFooter}>
        <hr />
        <div className={styles.bottomFooter1}>
          <section>
            <p>
              © 2021 Cubix. All Rights Reserved.{" "}
              <span>Terms of Use. Privacy Policy.</span>
            </p>
          </section>
          <section>
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-linkedin-in"></i>
            <i class="fab fa-dribbble"></i>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Footer;
