import { useRef } from 'react'
import './App.css'
import { Header } from './Header/HeaderBlock';
import { WorkExp } from './WorkExperience/WorkexpBlock';
import { Projects } from './Projects/ProjectsBlock';
import { Activities } from './Activities/ActivitiesBlock';
import { Education } from './Education/EducationBlock';
import { Skills } from './Skills/SkillsBlock';
import { Additional } from './Additional/AdditionalBlock';
import generatePDF from 'react-to-pdf';
import { Button } from 'antd';

const handleMouseClick = (targetRef: any) => {
  generatePDF(targetRef, {
    filename: 'ad_resume.pdf'
  });
} 

const App = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <div ref={targetRef} className='resume'>
        <Header />
        <div className='left'>
          <WorkExp />
          <Projects />
          <Activities />
        </div>
        <div className='right'>
          <Education />
          <Skills />
          <Additional />
        </div>
      </div>
      <Button onClick={handleMouseClick.bind(null, targetRef)}>Download</Button>
    </>
  );
}

export default App
