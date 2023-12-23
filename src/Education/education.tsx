import styles from "./education.module.css";

interface educationDetails {
  name: string;
  subtitle: string;
  location: string;
  duration: string;
  description: string[];
}

interface educationBlockProps {
  blocks: educationDetails[];
}

const educations: educationBlockProps = {
  blocks: [
    {
      name: "Vellore Institute of Technology",
      subtitle: "Bachelor of Technology",
      location: "Vellore, TN",
      duration: "Expected Aug 2025",
      description: ["Computer Science and Engineering", "CGPA: 8.58"],
    },
    {
      name: "Excellencia Junior College",
      subtitle: "Senior Secondary Education",
      location: "Hyderabad, TS",
      duration: "2019 - 2021",
      description: ["12th Grade Percentage: 89%"],
    },
    {
      name: "St. Andrews High School",
      subtitle: "Primary and Secondary Education",
      location: "Hyderabad, TS",
      duration: "2007 - 2019",
      description: ["10th Grade Percentage: 89%"],
    },
  ],
};

const Educations = () => {
  return (
    <>
      <div className={styles.education}>
        {educations.blocks.map((block, index) => {
          return (
            <div className={styles.block} key={index}>
              <p className={styles.name}>{block.name}</p>
              <p className={styles.subtitle}>{block.subtitle}</p>
              <p className={styles.loctime}>
                <span className={styles.location}>{block.location}</span>
                <span className={styles.duration}>{block.duration}</span>
              </p>
              <div className={styles.description}>
                {block.description.map((description, index) => {
                  return <p className={styles.descItem} key={index}>{description}</p>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export { Educations, educations };
