import { Additionals } from "./additional";
import styles from "./additional-container.module.css";

const Additional = () => {
  return (
    <>
      <div className={styles.additionalHeader}>
        <p className={styles.additionalHeaderText}>Additional</p>
        <div className={styles.line}></div>
      </div>
      <Additionals />
    </>
  );
};

export { Additional };
