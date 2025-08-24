import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/cursorIcon.png")}
              alt="Frontend development icon"
            />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3><br/>
              <p>
                Skilled in building responsive and accessible web applications 
                using <b>HTML, CSS, JavaScript, and React.js</b>. 
                Dedicated to delivering clean, efficient, and user-friendly interfaces.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/uiIcon.png")}
              alt="UI design icon"
            />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3><br/>
              <p>
                Designed and developed projects such as a <b>Survey Form</b> 
                and <b>Parking Website</b>, ensuring usability, visual appeal, 
                and adherence to modern design standards.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/problem-solving.png")}
              alt="Problem-solving icon"
              style={{ width: "80px", height: "80px" }}
            />
            <div className={styles.aboutItemText}>
              <h3>Problem-Solving</h3><br/>
              <p>
                Enhancing problem-solving skills through 
                <b> Data Structures and Algorithms in Java</b>, 
                while preparing for coding challenges and technical interviews.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/career-aspiration.png")}
              alt="Career aspirations icon"
              style={{ width: "80px", height: "80px" }}
            />
            <div className={styles.aboutItemText}>
              <h3>Career Aspirations</h3><br/>
              <p>
                Focused on gaining practical industry experience through remote internships and hackathons, with the goal of applying technical expertise to real-world projects and advancing in software development.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
