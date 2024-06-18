import React, { useState } from 'react';
import './App.css';
import AnalogClock from './components/AnalohClock';
import DigitalClock from './components/DigitalClock';
import TimeZoneSelector from './components/TimeZoneSelector';
import Settings from './components/Settings';
// eslint-disable-next-line
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment-timezone';

const App = () => {
  const timeZones = moment.tz.names();
  const [selectedTimeZone, setSelectedTimeZone] = useState('UTC');
  const [theme, setTheme] = useState('dark');
  const [clockSize, setClockSize] = useState('medium');

  const sizeClass = clockSize === 'small' ? 'small-clock' : clockSize === 'large' ? 'large-clock' : 'medium-clock';
  const themeClass = theme === 'dark' ? 'dark-theme' : 'light-theme';

  return (
    <div className={`App ${themeClass}`}>
      <header className="App-header">
        <h1>World Clock</h1>
      </header>
      <Settings theme={theme} setTheme={setTheme} clockSize={clockSize} setClockSize={setClockSize} />
      <TimeZoneSelector timeZones={timeZones} selectedTimeZone={selectedTimeZone} onTimeZoneChange={setSelectedTimeZone} />
      <div className={`clocks ${sizeClass}`}>
        <AnalogClock timeZone={selectedTimeZone} />
        <DigitalClock timeZone={selectedTimeZone} />
      </div>
    </div>
  );
};

export default App;
