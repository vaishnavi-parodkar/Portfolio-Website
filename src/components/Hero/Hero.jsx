import React, { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

const roles = ["Frontend Developer", "React Developer", "UI Designer", "Open Source Contributor"];

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const role = roles[roleIndex];
    let timeout;
    if (!deleting && displayed.length < role.length) {
      timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === role.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section className={styles.container}>
      <div className={styles.blob1} />
      <div className={styles.blob2} />
      <div className={styles.grid} />

      <div className={styles.content}>
        <div className={styles.badge}>Available for opportunities</div>
        <h1 className={styles.title}>
          Vaishnavi
          <span className={styles.titleAccent}>Parodkar</span>
        </h1>
        <p className={styles.subtitle}>
          <span className={styles.typewriter}>{displayed}&nbsp;</span>
        </p>
        <p className={styles.description}>
          Frontend developer passionate about building modern, responsive,
          and user-friendly web applications with React and JavaScript.
          Open-source contributor & AI enthusiast.
        </p>
        <div className={styles.actions}>
          <a href="mailto:vaishnaviparodkar@gmail.com" className={styles.contactBtn}>
            Get in touch →
          </a>
          <a href="#projects" className={styles.ghostBtn}>
            View my work
          </a>
        </div>
      </div>

      <div className={styles.imageWrap}>
        <div className={styles.ring} />
        <img
          src={getImageUrl("hero/heroImage.png")}
          alt="Vaishnavi Parodkar"
          className={styles.heroImg}
        />
      </div>

      <div className={styles.scrollIndicator}>
        <span>scroll</span>
        <div className={styles.scrollDot} />
      </div>
    </section>
  );
};
