import { Activity } from "./activities";
import styles from "./activities-container.module.css";

const Activities = () => {
  return (
    <>
      <div className={styles.activitiesHeader}>
        <p className={styles.activitiesHeaderText}>Activities</p>
        <div className={styles.line}></div>
      </div>
      <Activity />
    </>
  );
};

export { Activities };
