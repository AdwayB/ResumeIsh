import styles from "./activities.module.css";

interface activityDetails {
  name: string;
  subtitle: string;
  location: string;
  duration: string;
  description: string[];
}

interface activityBlockProps {
  blocks: activityDetails[];
}

const activities: activityBlockProps = {
  blocks: [
    {
      name: "Sigma XI: The Scientific Research Honor Society",
      subtitle: "Acting Chairperson, Core Committee Member",
      location: "Vellore, TN",
      duration: "Apr 2022 - present",
      description: [
        "Founded Tech Ed sessions to organize technical training for ~200 students.",
        "Organized, conducted and advertised 10+ events with 700+ participants in university.",
      ],
    },
  ],
};

const Activity = () => {
  return (
    <>
      <div className={styles.activities}>
        {activities.blocks.map((block, index) => {
          return (
            <div className={styles.block} key={index}>
              <p className={styles.name}>{block.name}</p>
              <p className={styles.subtitle}>{block.subtitle}</p>
              <p className={styles.loctime}>
                <span className={styles.location}>{block.location}</span>
                <span className={styles.duration}>{block.duration}</span>
              </p>
              <ul className={styles.description}>
                {block.description.map((description, index) => {
                  return <li className={styles.descItem} key={index}>{description}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
};

export { Activity, activities };
