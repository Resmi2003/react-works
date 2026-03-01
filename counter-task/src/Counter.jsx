import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";

function Counter() {

  // State to store counter value
  const [count, setCount] = useState(0);

  // State to control pause and resume
  const [isRunning, setIsRunning] = useState(true); // true means counter is running and false means counter is stopped. this controls pause and resume.

  // Runs automatically when page loads or isRunning changes
  useEffect(() => {
    let intervalId;     // stores the interval reference. needed to stop the interval later.

    if (isRunning) {    // if isRunning === true then start counting
      intervalId = setInterval(() => {      // setInterval repeats code. runs every 1000 ms (1 second).
        setCount((previousCount) => previousCount + 1);    // take old value. adds 1. save it back
      }, 1000);
    }

    // Cleanup: stop interval
    return () => clearInterval(intervalId);   // stop interval when paused. component reloads.
  }, [isRunning]);    // useEffect runs when isRunning changes .ie, Pause → stop and  Resume → start.

  // Pause or Resume function
  const handlePauseResume = () => {    // function runs when button is clicked
    setIsRunning(!isRunning);          // if true → false, if false → true. switch between 2 states.
  };

  // Reset function
  const handleReset = () => {
    setIsRunning(false);    // stop counter
    setCount(0);        // set number to zero
  };

  return (    // everything inside this is shown on screen.
    <div className="d-flex justify-content-center align-items-center vh-100">

      {/* Counter Card */}
      <Card className="text-center p-4" style={{ width: "18rem" }}>

        {/* Display counter value */}
        <h1>{count}</h1>

        {/* Buttons section */}
        <div className="d-flex justify-content-between">

          {/* Pause / Resume Button */}
          <Button
            variant={isRunning ? "warning" : "success"}
            onClick={handlePauseResume}
          >
            {isRunning ? "Pause" : "Resume"}
          </Button>

          {/* Reset Button */}
          <Button variant="danger" onClick={handleReset}>
            Reset
          </Button>

        </div>
      </Card>
    </div>
  );
}

export default Counter