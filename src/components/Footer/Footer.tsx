/* eslint-disable max-len */
/* eslint-disable prettier/prettier */
import React from "react";
import classNames from 'classnames';
import styles from "./Footer.module.scss";
import {scrollToTop} from "../../utils/scrollToTop";

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
          <button
            type="button"
            className={classNames(styles.button_top, "group", "hover:text-primary")}
            onClick={scrollToTop}
          >
            Back to top
            <span
              className={classNames("group-hover:border-primary", styles.img_border)}
            >
              <img
                className="h-2 w-2"
                src="../../public/img/icons/arrow-up-black.svg"
                alt="back-to-top-button"
              />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};
