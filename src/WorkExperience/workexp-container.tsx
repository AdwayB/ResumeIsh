import { Workexps } from "./workexp";
import styles from "./workexp-container.module.css";

const WorkExp = () => {
  return (
    <>
      <div className={styles.workexpHeader}>
        <p className={styles.workexpHeaderText}>Work Experience</p>
        <div className={styles.line}></div>
      </div>
      <Workexps />
    </>
  );
};

export { WorkExp };
