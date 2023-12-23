import styles from "./skills.module.css";

interface skillDetails {
  name: string;
  description: string;
}

interface skillBlockProps {
  blocks: skillDetails[];
}

const skills: skillBlockProps = {
  blocks: [
    {
      name: "Frontend Development",
      description:
        "HTML, CSS, SASS, Bootstrap, JavaScript, TypeScript, React.js, Next.js, GreenSock Animation Platform",
    },
    {
      name: "Backend Development",
      description:
        "ASP.NET, Node.js, Express.js, Flask, GraphQL, REST APIs, SQLPlus, MySQL, NoSQL, MongoDB, ArangoDB",
    },
    {
      name: "Machine Learning",
      description:
        "MatPlotLib, Pandas, NumPy, scikit-learn, Seaborn, TensorFlow, PyTorch, OpenCV",
    },
    {
      name: "Programming",
      description: "C, C++, C#, Java, Python, R, Assembly, Shell Scripting",
    },
    {
      name: "Tools/Platforms",
      description: "AWS, GCP, Azure DevOps, Git, GitHub, Webpack, Postman",
    },
  ],
};

const Skill = () => {
  return (
    <>
      <div className={styles.skills}>
        {skills.blocks.map((block, index) => {
          return (
            <div className={styles.block} key={index}>
              <p className={styles.name}>{block.name}</p>
              <p className={styles.description}>{block.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export { Skill, skills };
