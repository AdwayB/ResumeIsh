import { useRef } from 'react';
import './App.css';
import { useReactToPrint } from 'react-to-print';
import { Button } from 'antd';
import { Resume } from './Resume';

const App = () => {
  const targetRef = useRef(null);

  return (
    <>
      <Resume ref={targetRef} />
      <Button
        onClick={useReactToPrint({
          content: () => targetRef.current
        })}
      >
        Download
      </Button>
    </>
  );
};

export default App;
