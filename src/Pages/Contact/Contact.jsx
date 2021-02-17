import React from "react";
import styles from "./Contact.module.scss";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.section1}>
        <img
          src="https://www.cubix.co/themes/responsiv-clean/assets/images/contact/headquarter.svg"
          alt="cubix web development"
        />
        <div className={styles.imgText}>
          <h4>Headquater</h4>
          <p>
            700 S. Rosemary Ave, Suite 204-118 <br /> West Palm Beach, FL 33401
          </p>
        </div>
        <div className={styles.imgTextLink}>
          <Link to="/">
            <h5>Cubix.</h5>
          </Link>
        </div>
      </div>
      <div className={styles.section2}>
        <div className={styles.section3}>
          <div>
            <span>
              <i class="fas fa-envelope"></i>info@cubix.co
            </span>
          </div>
          <div>
            <span>
              <i class="fas fa-phone-alt"></i>866-978-2220
            </span>
          </div>
        </div>
        <div className={styles.section4}>
          <h1>Let's start a project together</h1>
          <p>We make all your dreams come true in a successful project.</p>
        </div>
        <div className={styles.section5}>
          <input placeholder="Name" />
          <div>
            <input placeholder="Email" />
            <input placeholder="Phone" />
          </div>
          <input placeholder="Message" />
          <button>submit</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
