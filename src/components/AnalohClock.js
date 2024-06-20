import React, { useEffect, useRef } from 'react';
import moment from 'moment-timezone';
import './AnalogClock.css';

const AnalogClock = ({ timeZone }) => {
  const clockRef = useRef(null);

  useEffect(() => {
    const updateClock = () => {
      const now = moment.tz(timeZone);
      const second = now.seconds() * 6;
      const minute = now.minutes() * 6 + now.seconds() * (360 / 3600);
      const hour = ((now.hours() % 12) / 12) * 360 + 90 + now.minutes() * (360 / 720);
      
      if (clockRef.current) {
        clockRef.current.querySelector('.hour').style.transform = `rotate(${hour}deg)`;
        clockRef.current.querySelector('.minute').style.transform = `rotate(${minute}deg)`;
        clockRef.current.querySelector('.second').style.transform = `rotate(${second}deg)`;
      }
    };

    const intervalId = setInterval(updateClock, 1000);
    return () => clearInterval(intervalId);
  }, [timeZone]);

  return (
    <div ref={clockRef} className="analog-clock">
      <div className="numbers">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="number" style={{ transform: `rotate(${i * 30}deg)` }}>
            <div style={{ transform: `rotate(-${i * 30}deg)` }}>{i === 0 ? 12 : i}</div>
          </div>
        ))}
      </div>
      <div className="hands">
        <div className="hand hour"></div>
        <div className="hand minute"></div>
        <div className="hand second"></div>
      </div>
    </div>
  );
};

export default AnalogClock;
