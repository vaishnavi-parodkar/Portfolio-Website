import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <p className={`${styles.sectionLabel} reveal`}>What I know & where I've been</p>
      <h2 className={`${styles.title} reveal`}>Skills & Experience</h2>

      <div className={styles.layout}>
        {/* Skills */}
        <div className="reveal">
          <p className={styles.skillsTitle}>Tech Stack</p>
          <div className={styles.skillsGrid}>
            {skills.map((skill, id) => (
              <div key={id} className={styles.skill}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                <p>{skill.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="reveal">
          <p className={styles.historyTitle}>Timeline</p>
          <ul className={styles.timeline}>
            {history.map((item, id) => (
              <li key={id} className={styles.historyItem}>
                <img src={getImageUrl(item.imageSrc)} alt={item.organisation} />
                <p className={styles.role}>{item.role}</p>
                <p className={styles.org}>{item.organisation}</p>
                <p className={styles.dates}>{item.startDate} – {item.endDate}</p>
                <ul className={styles.expList}>
                  {item.experiences.map((exp, i) => (
                    <li key={i}>{exp}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
