import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

const socials = [
  { href: "https://www.linkedin.com/in/vaishnavi-parodkar-4a1b8b28a", img: "contact/linkedinIcon.png", label: "LinkedIn" },
  { href: "https://github.com/vaishnavi-parodkar", img: "contact/githubIcon.png", label: "GitHub" },
  { href: "https://twitter.com/Vaishnavii_11", img: "contact/twitter.png", label: "Twitter" },
  { href: "https://medium.com/@parodkarvaishnavi", img: "contact/medium.png", label: "Medium" },
  { href: "https://leetcode.com/u/parodkarvaishnavi/", img: "contact/leetcode.png", label: "LeetCode" },
  { href: "https://www.hackerrank.com/profile/vaishnaviparodk1", img: "contact/Hackerrank.jpeg", label: "HackerRank" },
];

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={`${styles.inner} reveal`}>
        <p className={styles.sectionLabel}>Let's connect</p>
        <h2 className={styles.title}>Got a project in mind?</h2>
        <p className={styles.subtitle}>
          I'm open to internships, collaborations, and new opportunities.<br />
          Drop me a message — I'd love to chat!
        </p>
        <a href="mailto:vaishnaviparodkar@gmail.com" className={styles.emailBtn}>
          vaishnaviparodkar@gmail.com →
        </a>
        <div className={styles.divider} />
        <div className={styles.socials}>
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
              aria-label={s.label}
            >
              <img src={getImageUrl(s.img)} alt={s.label} />
            </a>
          ))}
        </div>
      </div>
      <p className={styles.footer}>
        © 2025 Vaishnavi Parodkar · Built with React & ❤️
      </p>
    </footer>
  );
};
