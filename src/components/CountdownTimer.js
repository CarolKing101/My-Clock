import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [duration, setDuration] = useState(10); // default to 10 seconds
  const [timeLeft, setTimeLeft] = useState(duration);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((timeLeft) => timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      clearInterval(interval);
      alert('Countdown finished!');
    }

    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const startCountdown = () => {
    setTimeLeft(duration);
    setIsActive(true);
  };

  return (
    <div className="countdown-timer">
      <input
        type="number"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        placeholder="Enter countdown duration in seconds"
      />
      <button onClick={startCountdown}>Start Countdown</button>
      <div>{timeLeft} seconds left</div>
    </div>
  );
};

export default CountdownTimer;
