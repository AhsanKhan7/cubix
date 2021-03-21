import React from "react";
import styles from "./Awards.module.scss";

const Awards = () => {
  return (
    <>
      <div className={styles.awards}>
        <h1>Awards & recognitions</h1>
        <div className={styles.awardCards}>
          <section>
            <img
              src="https://www.cubix.co/themes/responsiv-clean/assets/images/home/webp/forbes-technologies-cource1.webp"
              width="100px"
              alt="Clutch Icon"
            />
            <h5>Forbes technology council</h5>
            <p>Recognised member of forbes technology council</p>
          </section>
          <section>
            <img
              src="https://www.cubix.co/themes/responsiv-clean/assets/images/home/webp/2020 -Hybrid App Developers1.webp"
              width="120px"
              alt="Cubix Awarded Forbes Technology Council Member"
            />
            <h5>Top hybrid app developers june 2020</h5>
            <p>Top hybrid app developement company</p>
          </section>
          <section>
            <img
              src="https://www.cubix.co/themes/responsiv-clean/assets/images/home/webp/2020 -Hybrid App Developers1.webp"
              width="120px"
              alt="Cubix Awarded Top Hybrid App Developers"
            />
            <h5>Top mobile app developers june 2020</h5>
            <p>Top mobile app developement company in 2020</p>
          </section>
          <section>
            <img
              src="https://www.cubix.co/themes/responsiv-clean/assets/images/home/webp/app_development_compay111.webp"
              width="120px"
              alt="Cubix Awarded Top Hybrid App Development Company"
            />
            <h5>Top mobile application developers</h5>
            <p>Top rated app developement company in 2020</p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Awards;
