import React from "react";
import styles from "./NotFoundPage.module.scss";

export const NotFoundPage: React.FC = () => {
  return (
    <div className={styles.page}>
      <div className={styles.modal}>
        <h1 className={styles.header}>404</h1>
        <p className={styles.text}>
          Oops! The page you are looking for could not be found.
        </p>
        <a href="/" className={styles.button}>
          Go back to Home
        </a>
      </div>
    </div>
  );
};
