import React from "react";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.header}>
      <section>
        <Link to="/">
          <img
            class="logo-sticky"
            src="https://www.cubix.co/themes/responsiv-clean/assets/img/cubix-logo-dark.svg"
            alt="Cubix"
          />
        </Link>
      </section>
      <section>
        <Link to="/services">
          <p>Services</p>
        </Link>
      </section>
      <section>
        <Link to="/work">
          <p>Work</p>
        </Link>
      </section>
      <section>
        <Link to="/about">
          <p>About</p>
        </Link>
      </section>
      <section>
        <Link to="/contact">
          <p>Contact</p>
        </Link>
      </section>
    </div>
  );
};

export default Header;
