import React from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <p className={`${styles.sectionLabel} reveal`}>What I've built</p>
      <h2 className={`${styles.title} reveal`}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => (
          <div
            key={id}
            className="reveal"
            style={{ transitionDelay: `${(id % 3) * 80}ms` }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};
