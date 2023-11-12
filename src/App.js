import React, { useState, useEffect } from 'react';

const App = () => {
  const [usaTime, setUsaTime] = useState(new Date());

  useEffect(() => {
    // Update the time every second
    const interval = setInterval(() => {
      setUsaTime(new Date());
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const options = {
    timeZone: 'America/New_York', // USA Eastern Time Zone
    hour24: true, // Use 12-hour format (false for 24-hour format)
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };

  const usaTimeString = usaTime.toLocaleString('en-US', options);

  return (
    <div>
      <h1>Current USA Time:</h1>
      <p>{usaTimeString}</p>
    </div>
  );
};

export default App;
