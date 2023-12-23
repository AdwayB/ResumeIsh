import styles from "./projects.module.css";

type projectDetails = {
  name: string;
  subtitle: string;
  duration: string;
  description: string[];
};

interface projectBlockProps {
  blocks: projectDetails[];
}

const projects: projectBlockProps = {
  blocks: [
    {
      name: "EchoRx",
      subtitle: "An image-to-speech platform for medical prescriptions.",
      duration: "Jun 2023 - present",
      description: [
        "A research project undertaken by a 2-person team to create an OCR model to recognise handwritten text in medical prescriptions and an application to convert the text to speech for the vision-impaired.",
        "Designed and implemented a POC for the OCR model with Python, Google Cloud Vision, PyTorch and OpenCV.",
      ],
    },
    {
      name: "AttentionX",
      subtitle: "An OpenCV-based EdTech tool.",
      duration: "Jun 2023 - present",
      description: [
        "Designed and implemented focus tracking ML model for an EdTech platform using Python in a 2-day hackathon.",
        "Enabled users to be able to track their level of focus while learning and get statistics and tips after every lesson.",
        "Implemented using Python, OpenCV and scikit-learn.",
      ],
    },
    {
      name: "Article Recommendation Engine",
      subtitle: "",
      duration: "May 2023",
      description: [
        "Designed and implemented two article recommendation engines using Python for an IISc internship opportunity.",
        "Enabled users to be recommended articles based on 20+ data points and successfully demonstrated the POC.",
        "Implemented using Python and scikit-learn.",
      ],
    },
  ],
};

const Project = () => {
  return (
    <>
      <div className={styles.projects}>
        {projects.blocks.map((block, index) => {
          return (
            <div className={styles.block} key={index}>
              <p className={styles.name}>{block.name}</p>
              <p className={styles.subtitle}>{block.subtitle}</p>
              <p className={styles.duration}>{block.duration}</p>
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

export { Project };
