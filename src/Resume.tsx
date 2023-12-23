import React from 'react';
import styles from './resume.module.css'
import { Header } from './Header/header';
import { WorkExp } from './WorkExperience/WorkexpBlock';
import { Projects } from './Projects/ProjectsBlock';
import { Activities } from './Activities/ActivitiesBlock';
import { Education } from './Education/EducationBlock';
import { Skills } from './Skills/SkillsBlock';
import { Additional } from './Additional/AdditionalBlock';

/* eslint-disable react/display-name */
const Resume = React.forwardRef((_props: any, ref: any) => {
  return (
    <div className={styles.resume} ref={ref}>
        <Header/>
      <div className={styles.left}>
        <WorkExp />
        <Projects />
        <Activities />
      </div>
      <div className={styles.right}>
        <Education />
        <Skills />
        <Additional />
      </div>
    </div>
  );
});

export { Resume };
