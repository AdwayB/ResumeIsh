import styles from "./additional.module.css";

interface detailsBlock {
  name: string;
  description: string[];
}

type additionalDetails = {
  title: string;
  details: detailsBlock[];
};

interface additionalBlockProps {
  blocks: additionalDetails[];
}

const additionals: additionalBlockProps = {
  blocks: [
    {
      title: "Interests",
      details: [
        {
          name: "Music Production/Engineering",
          description: [
            "A trained guitarist and producer of 5+ years. Incorporates multiple genres including rock, metal, jazz, blues, electronic, indie, etc.",
          ],
        },
      ],
    },
  ],
};

const Additionals = () => {
  return (
    <>
      <div className={styles.additionals}>
        {additionals.blocks.map((block, index) => {
          return (
            <div className={styles.block} key={index}>
              <p className={styles.name}>{block.title}</p>
              {block.details.map((desc, index) => {
                return (
                  <div className={styles.details} key={index}>
                    <p className={styles.name}>{desc.name}</p>
                    {desc.description.map((desc, index) => {
                      return <p className={styles.description} key={index}>{desc}</p>;
                    })}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};

export { Additionals };
