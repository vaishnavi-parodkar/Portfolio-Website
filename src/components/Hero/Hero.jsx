import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
      
        <h1 className={styles.title}>Hi, I'm Vaishnavi Parodkar</h1>
        <p className={styles.description}>
          👋 I'm a frontend developer passionate about building modern, responsive, and user-friendly web applications with React and JavaScript.
        </p>
        <a href="mailto:vaishnaviparodkar@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
        
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
