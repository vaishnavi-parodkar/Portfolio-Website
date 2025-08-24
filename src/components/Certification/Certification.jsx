import React from "react";
import styles from "./Certification.module.css";
import certifications from "../../data/certifications.json";

export const Certification = () => {
  return (
    <section id="certification" className={styles.container}>
      <h2>CERTIFICATIONS</h2>
      <div className={styles.certList}>
        {certifications.map((cert, index) => (
          <div key={index} className={styles.certCard}>
            <h3>{cert.title}</h3>
            <p><strong>Issuer:</strong> {cert.issuer}</p>
            <p><strong>Year:</strong> {cert.year}</p>
            {cert.link && (
              <a href={cert.link} target="_blank" rel="noopener noreferrer">
                View Certificate
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
