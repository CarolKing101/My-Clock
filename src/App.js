import React, { useState } from 'react';
import AnalogClock from './components/AnalohClock';
import DigitalClock from './components/DigitalClock';
import SettingsTabs from './components/Tabs';
import Weather from './components/Weather';
import CountdownTimer from './components/CountdownTimer';
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment-timezone';
import './App.css';

const App = () => {
  const [selectedTimeZone, setSelectedTimeZone] = useState(moment.tz.guess());
  const [theme, setTheme] = useState('dark');
  const [clockSize, setClockSize] = useState('medium');

  const timeZones = moment.tz.names();

  return (
    <div className={`App ${theme}-theme`}>
      <header className="App-header">World Clock</header>
      <SettingsTabs
        theme={theme}
        setTheme={setTheme}
        timeZones={timeZones}
        selectedTimeZone={selectedTimeZone}
        setSelectedTimeZone={setSelectedTimeZone}
        clockSize={clockSize}
        setClockSize={setClockSize}
      />
      <div className={`clocks ${clockSize}`}>
        <AnalogClock timeZone={selectedTimeZone} />
        <DigitalClock timeZone={selectedTimeZone} />
      </div>
      <Weather timeZone={selectedTimeZone} />
      <CountdownTimer />
    </div>
  );
};

export default App;
