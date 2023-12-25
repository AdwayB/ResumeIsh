import { Educations } from './education';
import styles from './education-container.module.css';

const Education = () => {
  return (
    <div className={styles.educationContainer}>
      <div className={styles.educationHeader}>
        <p className={styles.educationHeaderText}>Education</p>
        <div className={styles.line}></div>
      </div>
      <Educations />
    </div>
  );
};

export { Education };
