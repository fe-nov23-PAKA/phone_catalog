import React from "react";
import styles from "./Footer.module.scss";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div>
          <a href="/home">
            <img
              className="h-7 w-20"
              src="../../public/img/Logo.svg"
              alt="nive-gadgets-logo"
            />
          </a>
        </div>

        <div className={styles.links}>
          <a className={styles.link} href="/">
            Github
          </a>

          <a className={styles.link} href="/">
            Contacts
          </a>

          <a className={styles.link} href="/">
            Rights
          </a>
        </div>

        <div className={styles.button}>
          <button type="button" className={styles.button_top}>
            <span className={styles.button_title}>Back to top</span>
            <img
              className="h-8 w-8"
              src="../../public/img/icons/arrow-upToTop.svg"
              alt="back-to-top-button"
            />
          </button>
        </div>
      </div>
    </footer>
  );
};
