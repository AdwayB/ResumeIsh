import styles from './header.module.css';
const Header = () => {
  const details = {
    name: "Adway Byju",
    employmentStatus: "Undergraduate Student",
    address: "Hyderabad, IN",
    phone: "+91 70950 63492",
    email: "adwaybyju@gmail.com",
    linkedin: "https://www.linkedin.com/in/adwaybyju/",
    github: "https://github.com/AdwayB",
  };

  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.nameEmployment}>
          <p className={styles.name}>{details.name}</p>
          <p className={styles.emp}>{details.employmentStatus}</p>
        </div>
        <div className={styles.details}>
          <p className={styles.detailContent}>{details.address}</p>
          <p className={styles.detailContent}>{details.phone}</p>
          <p className={styles.detailContent}>{details.email}</p>
          <abbr title={details.linkedin}><a href={details.linkedin} className={styles.detailLink}>LinkedIn</a></abbr>
          <abbr title={details.github}><a href={details.github} className={styles.detailLink}>Github</a></abbr>
        </div>
      </div>
      <div className="line"></div>
    </>
  );
};

export { Header };
