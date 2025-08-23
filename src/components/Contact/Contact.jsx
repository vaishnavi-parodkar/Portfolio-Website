import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <h2 className={styles.title}>Reach Me At</h2>
      <p className={styles.subtitle}>
        Feel free to connect with me through email or any of my socials!
      </p>

      <div className={styles.socials}>
        <a href="mailto:vaishnaviparodkar@gmail.com" target="_blank" rel="noreferrer">
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email" />
        </a>
        <a href="https://www.linkedin.com/in/vaishnavi-parodkar-4a1b8b28a" target="_blank" rel="noreferrer">
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn" />
        </a>
        <a href="https://github.com/vaishnavi-parodkar" target="_blank" rel="noreferrer">
          <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub" />
        </a>
        <a href="https://twitter.com/Vaishnavii_11" target="_blank" rel="noreferrer">
          <img src={getImageUrl("contact/twitterIcon.png")} alt="Twitter" />
        </a>
        <a href="https://medium.com/@parodkarvaishnavi" target="_blank" rel="noreferrer">
          <img src={getImageUrl("contact/MediumIcon.png")} alt="Medium" />
        </a>
        <a href="https://leetcode.com/u/parodkarvaishnavi/" target="_blank" rel="noreferrer">
          <img src={getImageUrl("contact/LeetCodeIcon.png")} alt="LeetCode" />
        </a>
      </div>
    </footer>
  );
};
