import { Project } from "./projects";
import styles from "./projects-container.module.css";

const Projects = () => {
  return (
    <>
      <div className={styles.projectsHeader}>
        <p className={styles.projectsHeaderText}>Academic Projects</p>
        <div className={styles.line}></div>
      </div>
      <Project />
    </>
  );
};

export { Projects };
