import React, { useState } from 'react';
import './Count.css'; // Import the CSS file

function Count() {
  const [count, setCount] = useState(10);

  const AddValue = () => {
    setCount(count + 1);
    if (count == 10){
      setCount(10);
    }
  }

  const SubValue = () => {
    setCount(count - 1);
    if(count == 0){
      setCount(0);
    }
  }

  return (
    <>
      <h1>Count Value: {count}</h1>
      <button className="button increase" onClick={AddValue}>Increase Value</button>
      <button className="button decrease" onClick={SubValue}>Decrease Value</button>
    </>
  );
}

export default Count;
