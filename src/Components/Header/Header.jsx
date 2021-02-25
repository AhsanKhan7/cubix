import React, { useState } from "react";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";

import EstimateModal from "../EstimateModal/EstimateModal";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.header}>
      <div>
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
            <span>Services</span>
          </Link>
        </section>
        <section>
          <Link to="/">
            <span>Solutions</span>
          </Link>
        </section>
        <section>
          <Link to="/work">
            <span>Work</span>
          </Link>
        </section>
        <section>
          <Link to="/about">
            <span>About</span>
          </Link>
        </section>
        <section>
          <Link to="/">
            <span>Resources</span>
          </Link>
        </section>
        <section>
          <Link to="/contact">
            <span>Contact</span>
          </Link>
        </section>

        <section>
          <i class="fas fa-phone-alt"></i>
          <span>866-978-2220</span>
        </section>

        <section>
          <button onClick={handleOpen}>ESTIMATE PROJECT</button>
        </section>
      </div>

      <EstimateModal open={open} handleClose={handleClose} />
    </div>
  );
};

export default Header;
