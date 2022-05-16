import React from "react";
import "../App.css";
import styles from "./homepage.module.scss";

const Homepage = () => (
  <div className={styles.homepage}>
    <div className={styles.directory}>
      <div className={styles.menuItem}>
        <div className={styles.content}>
          <h1 className={styles.title}>TITLE 1 HERE</h1>
          <span className={styles.subtitle}>subtitle</span>
        </div>
      </div>

      <div className={styles.menuItem}>
        <div className={styles.content}>
          <h1 className={styles.title}>TITLE 1 HERE</h1>
          <span className={styles.subtitle}>subtitle</span>
        </div>
      </div>

      <div className={styles.menuItem}>
        <div className={styles.content}>
          <h1 className={styles.title}>TITLE 1 HERE</h1>
          <span className={styles.subtitle}>subtitle</span>
        </div>
      </div>

      <div className={styles.menuItem}>
        <div className={styles.content}>
          <h1 className={styles.title}>TITLE 1 HERE</h1>
          <span className={styles.subtitle}>subtitle</span>
        </div>
      </div>

      <div className={styles.menuItem}>
        <div className={styles.content}>
          <h1 className={styles.title}>TITLE 1 HERE</h1>
          <span className={styles.subtitle}>subtitle</span>
        </div>
      </div>
    </div>
  </div>
);

export default Homepage;
