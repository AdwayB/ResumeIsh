import styles from "./workexp-container.module.css";

interface companyDetails {
  company: string;
  companyDesc: string;
  location: string;
  duration: string;
  role: string;
  description: string[];
}

interface companyBlockProps {
  blocks: companyDetails[];
}

const details: companyBlockProps = {
  blocks: [
    {
      company: "Qapita Fintech India Pvt Ltd",
      companyDesc: "A comprehensive equity management platform",
      location: "Hyderabad, IN",
      duration: "Aug 2023 - present",
      role: "Software Engineer Intern",
      description: [
        "Refactored and cleaned up the frontend codebase.",
        "Created common components that were used across the entire application and maintained the collection in Storybook format.",
        "Optimised the performance and size of the application by implementing best practices and the latest advances in frameworks.",
      ],
    },
  ],
};

const Workexps = () => {
  return (
    <>
      <div className={styles.workexp}>
        {details.blocks.map((block, index) => {
          return (
            <div className={styles.block} key={index}>
              <p className={styles.company}>{block.company}</p>
              <p className={styles.companyDesc}>{block.companyDesc}</p>
              <p className={styles.loctime}>
                <span className={styles.location}>{block.location}</span>
                <span className={styles.duration}>{block.duration}</span>
              </p>
              <p className={styles.role}>{block.role}</p>
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

export { Workexps };
