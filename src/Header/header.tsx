import styles from './header.module.css';
import linkedin from '/linkedin-black.png';
import github from '/github-black.png';

const Header = () => {
  const details = {
    name: 'Adway Byju',
    employmentStatus: 'Undergraduate Student',
    address: 'Hyderabad, IN',
    phone: '+91 70950 63492',
    email: 'adwaybyju@gmail.com',
    linkedin: 'https://www.linkedin.com/in/adwaybyju/',
    github: 'https://github.com/AdwayB'
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
          <div className={styles.links}>
            <span className={styles.detailLink}>
              <img src={linkedin} className={styles.icon} />
              <abbr title={details.linkedin}>
                <a href={details.linkedin}>LinkedIn</a>
              </abbr>
            </span>
            <span className={styles.detailLink}>
              <img src={github} className={styles.icon} />
              <abbr title={details.github}>
                <a href={details.github}>Github</a>
              </abbr>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.line}></div>
    </>
  );
};

export { Header };
