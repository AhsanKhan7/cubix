import React from "react";
import styles from "./Work.module.scss";

import project1Pic from "../../Assets/work_assets/project1.jpg";
import project2Pic from "../../Assets/work_assets/project2.jpg";
import project3Pic from "../../Assets/work_assets/project3.jpg";
import project4Pic from "../../Assets/work_assets/project4.jpg";
import project5Pic from "../../Assets/work_assets/project5.jpg";
import project6Pic from "../../Assets/work_assets/project6.jpg";

const Work = () => {
  return (
    <div className={styles.work}>
      <section className={styles.workTitle}>
        <h1>Our portfolio</h1>
        <p>
          We help our clients grow with cutting-edging technologies, extravagant
          designs, and innovative software solutions.
        </p>
      </section>

      <div className={styles.project1}>
        <section className={styles.project1Text}>
          <h2>Foodly</h2>
          <p>
            Foodly lists all the world’s cuisines in its catalog so that people
            can curb their desire for a warm meal at any time of the day,
            anywhere in the world.
          </p>
          <button>VIEW CASESTUDY</button>
        </section>
        <section className={styles.project1Pic}>
          <img src={project1Pic} alt="project1" />
        </section>
      </div>

      <div className={styles.project2}>
        <section className={styles.project2Pic}>
          <img src={project2Pic} alt="project2" />
        </section>
        <section className={styles.project2Text}>
          <h2>Curious</h2>
          <p>
            Curious is a revolution in the world of digital socializing, where
            it offers users a platform to express themselves with complete
            anonymity.
          </p>
          <button>VIEW CASESTUDY</button>
        </section>
      </div>

      <div className={styles.project3}>
        <section className={styles.project3Pic}>
          <img src={project3Pic} alt="project3" />
        </section>
        <section className={styles.project3Text}>
          <h2>Hictic</h2>
          <p>
            HicTic offers an alternative route to marketing brands and
            increasing engagement by targeting the mobile platform.
          </p>
          <button>VIEW CASESTUDY</button>
        </section>
      </div>

      <div className={styles.project4}>
        <section className={styles.project4Text}>
          <h2>Time forge</h2>
          <p>
            Enjoy a battle with monsters, collect coins, grab superpowers, and
            fight with the mega monster before you move to the level. A platform
            game for gaming geeks
          </p>
          <button>VIEW CASESTUDY</button>
        </section>
        <section className={styles.project4Pic}>
          <img src={project4Pic} alt="project4" />
        </section>
      </div>

      <div className={styles.project5}>
        <section className={styles.project5Pic}>
          <img src={project5Pic} alt="project5" />
        </section>
        <section className={styles.project5Text}>
          <h2>Hictic</h2>
          <p>
            HicTic offers an alternative route to marketing brands and
            increasing engagement by targeting the mobile platform.
          </p>
          <button>VIEW CASESTUDY</button>
        </section>
      </div>

      <div className={styles.project6}>
        <section className={styles.project6Text}>
          <h2>Qoot</h2>
          <p>
            Order scrumptious food from hundreds of eateries, cafés, and
            restaurants. Enjoy street food from anywhere in the city and devour
            on delicious meals.
          </p>
          <button>VIEW CASESTUDY</button>
        </section>
        <section className={styles.project6Pic}>
          <img src={project6Pic} alt="project6" />
        </section>
      </div>

      <div className={styles.bottomButton}>
        <button>LOAD MORE</button>
      </div>
    </div>
  );
};

export default Work;
