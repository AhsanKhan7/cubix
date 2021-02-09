import React from "react";
import styles from "./Partners.module.scss";

const Partners = () => {
  return (
    <>
      <section className={styles.Partners}>
        <h1>We partner with the world’s technology leaders.</h1>
        <section className={styles.PartnersSections}>
          <section>
            <img
              src="https://www.cubix.co/storage/app/media/home/Google-Developer-Certified-Agency.png"
              class="liquid-image-icon"
              alt="Google Developer Certificed Agency"
              width="150px"
            />
            <h5>Google developer certified agency</h5>
          </section>
          <section>
            <img
              src="https://www.cubix.co/storage/app/media/home/Adobe-Solution-Partner-Program.png"
              class="liquid-image-icon"
              alt="Adobe Solution Partner Program"
              width="150px"
            />
            <h5>Adobe solution partner program</h5>
          </section>
          <section>
            <img
              src="https://www.cubix.co/storage/app/media/home/Microsoft-Certified-Consulting-Partner.png"
              alt="Microsoft Certified Consulting Partner"
              width="150px"
            />
            <h5>Microsoft certified consulting partner</h5>
          </section>
          <section>
            <img
              src="https://www.cubix.co/storage/app/media/home/Amazon-Web-Services-Partner.png"
              class="liquid-image-icon"
              alt="Amazon Web Services Partner"
              width="150px"
            />
            <h5>Amazon web services partner</h5>
          </section>
        </section>
      </section>
    </>
  );
};

export default Partners;
