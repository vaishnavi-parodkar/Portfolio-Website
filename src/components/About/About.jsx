import React from "react";
import styles from "./About.module.css";

const cards = [
  {
    icon: "⚡",
    title: "Frontend Developer",
    text: <>Skilled in building responsive and accessible web apps using <b>HTML, CSS, JavaScript, and React.js</b>. Dedicated to clean, efficient, user-friendly interfaces.</>,
  },
  {
    icon: "🎨",
    title: "UI Designer",
    text: <>Designed and developed projects with a focus on usability, visual appeal, and <b>modern design standards</b>. Proficient with Figma.</>,
  },
  {
    icon: "🧩",
    title: "Problem Solver",
    text: <>Sharpening skills through <b>Data Structures & Algorithms in Java</b>, preparing for coding challenges and technical interviews.</>,
  },
  {
    icon: "🚀",
    title: "Career Aspirations",
    text: <>Focused on real-world experience via <b>internships, hackathons, and open source</b>. Goal: apply technical expertise to impactful software products.</>,
  },
];

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <p className={`${styles.sectionLabel} reveal`}>Who I am</p>
      <h2 className={`${styles.title} reveal`}>About Me</h2>
      <div className={styles.grid}>
        {cards.map((card, i) => (
          <div
            key={i}
            className={`${styles.card} reveal`}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <span className={styles.cardIcon}>{card.icon}</span>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardText}>{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
