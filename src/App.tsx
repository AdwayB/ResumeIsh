import { useRef } from 'react';
import './App.css';
import { useReactToPrint } from 'react-to-print';
import { Button } from 'antd';
import { Resume } from './Resume';

const App = () => {
  const targetRef = useRef(null);
  return (
    <>
      <div className='resumeContainer'>
        <Resume ref={targetRef} />
      </div>
      <Button
        onClick={useReactToPrint({
          content: () => targetRef.current
        })}
        type='primary'
        style={{ marginTop: '20px' }}
      >
        Download
      </Button>
    </>
  );
};

export default App;
