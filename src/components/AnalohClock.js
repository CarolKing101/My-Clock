import React, { useEffect, useRef } from 'react';
import moment from 'moment-timezone';
import './AnalogClock.css';

const AnalogClock = ({ timeZone }) => {
  const hourRef = useRef(null);
  const minuteRef = useRef(null);
  const secondRef = useRef(null);

  useEffect(() => {
    const updateClock = () => {
      const now = moment().tz(timeZone);
      const seconds = now.seconds();
      const minutes = now.minutes();
      const hours = now.hours();

      const secondDegree = (seconds / 60) * 360;
      const minuteDegree = (minutes / 60) * 360 + (seconds / 60) * 6;
      const hourDegree = (hours / 12) * 360 + (minutes / 60) * 30;

      if (secondRef.current) {
        secondRef.current.style.transform = `rotate(${secondDegree}deg)`;
      }
      if (minuteRef.current) {
        minuteRef.current.style.transform = `rotate(${minuteDegree}deg)`;
      }
      if (hourRef.current) {
        hourRef.current.style.transform = `rotate(${hourDegree}deg)`;
      }
    };

    const interval = setInterval(updateClock, 1000);
    updateClock(); // initial call to set the clock immediately

    return () => clearInterval(interval);
  }, [timeZone]);

  return (
    <div className="analog-clock">
      <div className="clock-face">
        <div ref={hourRef} className="hand hour-hand"></div>
        <div ref={minuteRef} className="hand minute-hand"></div>
        <div ref={secondRef} className="hand second-hand"></div>
        {[...Array(12)].map((_, i) => (
          <div key={i} className={`hour-marker hour-marker-${i + 1}`}>{i + 1}</div>
        ))}
      </div>
    </div>
  );
};

export default AnalogClock;
