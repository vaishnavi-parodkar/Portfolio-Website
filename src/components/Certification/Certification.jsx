import React from "react";
import styles from "./Certification.module.css";
import certifications from "../../data/certifications.json";

export const Certification = () => {
  return (
    <section id="certification" className={styles.container}>
      <p className={`${styles.sectionLabel} reveal`}>Credentials</p>
      <h2 className={`${styles.title} reveal`}>Certifications</h2>
      <div className={styles.certList}>
        {certifications.map((cert, index) => (
          <div
            key={index}
            className={`${styles.certCard} reveal`}
            style={{ transitionDelay: `${index * 60}ms` }}
          >
            <p className={styles.certIssuer}>{cert.issuer}</p>
            <h3 className={styles.certTitle}>{cert.title}</h3>
            <p className={styles.certYear}>{cert.year}</p>
            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.certLink}
                aria-label={`View certificate: ${cert.title}`}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
