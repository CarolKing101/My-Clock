import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment-timezone';
import AnalogClock from './components/AnalohClock';
import DigitalClock from './components/DigitalClock';
import Weather from './components/Weather';
import CountdownTimer from './components/CountdownTimer';
import NavBar from './components/NavBar';
import './App.css';

const App = () => {
  const [selectedTimeZones, setSelectedTimeZones] = useState([
    'Africa/Accra',
    'America/New_York',
    'Europe/London',
    'Asia/Tokyo',
  ]);
  const [theme, setTheme] = useState('dark');
  const [clockSize, setClockSize] = useState('medium');

  const timeZones = moment.tz.names();

  return (
    <div className={`App ${theme}-theme`}>
      <NavBar />
      <header className="App-header">World Clock</header>
      <div className="settings">
        <label htmlFor="theme">Theme</label>
        <select id="theme" value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option value="dark">Dark</option>
          <option value="light">Light</option>
        </select>
        <label htmlFor="clockSize">Clock Size</label>
        <select id="clockSize" value={clockSize} onChange={(e) => setClockSize(e.target.value)}>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>
      <div className={`clocks ${clockSize}`}>
        {selectedTimeZones.map((timeZone) => (
          <div key={timeZone} className="clock-container">
            <h4>{timeZone.split('/')[1].replace('_', ' ')}</h4>
            <AnalogClock timeZone={timeZone} />
            <DigitalClock timeZone={timeZone} />
            <Weather timeZone={timeZone} />
          </div>
        ))}
      </div>
      <CountdownTimer />
    </div>
  );
};

export default App;
