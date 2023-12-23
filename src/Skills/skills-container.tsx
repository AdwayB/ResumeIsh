import { Skill } from "./skills";
import styles from "./skills-container.module.css";

const Skills = () => {
  return (
    <>
      <div className={styles.skillsHeader}>
        <p className={styles.skillsHeaderText}>Skills</p>
        <div className={styles.line}></div>
      </div>
      <Skill />
    </>
  );
};

export { Skills };
