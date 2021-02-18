import React, { useState } from "react";
import styles from "./SideNav.module.scss";

import { Link } from "react-router-dom";

const SideNav = () => {
  const [SideNavOpen, setSideNavOpen] = useState(false);

  return (
    <div className={styles.sideNav}>
      {!SideNavOpen && (
        <div className={styles.header}>
          <div>
            <img
              class="logo-sticky"
              src="https://www.cubix.co/themes/responsiv-clean/assets/img/cubix-logo-dark.svg"
              alt="Cubix"
            />
          </div>
          <div
            className={styles.menuButton}
            onClick={(e) => setSideNavOpen(true)}
          >
            <i class="fas fa-bars"></i>
          </div>
        </div>
      )}

      {SideNavOpen && (
        <div className={styles.sideNavBottom}>
          <div className={styles.headerBottom}>
            <div>
              <Link to="/">
                <img
                  class="logo-sticky"
                  src="https://www.cubix.co/themes/responsiv-clean/assets/img/cubix-logo-dark.svg"
                  alt="Cubix"
                />
              </Link>
            </div>
            <div
              className={styles.menuButton}
              onClick={(e) => setSideNavOpen(false)}
            >
              <i class="fas fa-times"></i>
            </div>
          </div>

          <div className={styles.links}>
            <Link to="/services">
              <h4>Services</h4>
            </Link>
            <hr />
            <Link to="/work">
              <h4>Work</h4>
            </Link>
            <hr />
            <Link to="/about">
              <h4>About</h4>
            </Link>
            <hr />
            <Link to="/contact">
              <h4>Contact</h4>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideNav;
