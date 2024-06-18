import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';
import './DigitalClock.css';

const DigitalClock = ({ timeZone }) => {
  const [time, setTime] = useState(moment().tz(timeZone));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment().tz(timeZone));
    }, 1000);
    return () => clearInterval(interval);
  }, [timeZone]);

  return (
    <div className="digital-clock">
      {time.format('HH:mm:ss')}
    </div>
  );
};

export default DigitalClock;
