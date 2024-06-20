import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

const SettingsTabs = ({ theme, setTheme, timeZones, selectedTimeZone, setSelectedTimeZone, clockSize, setClockSize }) => {
  return (
    <Tabs defaultActiveKey="theme" id="settings-tabs" className="mb-3">
      <Tab eventKey="theme" title="Theme">
        <div className="form-group">
          <label htmlFor="theme-select">Theme</label>
          <select id="theme-select" className="form-control" value={theme} onChange={(e) => setTheme(e.target.value)}>
            <option value="dark">Dark</option>
            <option value="light">Light</option>
          </select>
        </div>
      </Tab>
      <Tab eventKey="timezone" title="Timezone">
        <div className="form-group">
          <label htmlFor="timezone-select">Timezone</label>
          <select id="timezone-select" className="form-control" value={selectedTimeZone} onChange={(e) => setSelectedTimeZone(e.target.value)}>
            {timeZones.map((zone) => (
              <option key={zone} value={zone}>{zone}</option>
            ))}
          </select>
        </div>
      </Tab>
      <Tab eventKey="clockSize" title="Clock Size">
        <div className="form-group">
          <label htmlFor="clock-size-select">Clock Size</label>
          <select id="clock-size-select" className="form-control" value={clockSize} onChange={(e) => setClockSize(e.target.value)}>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
      </Tab>
    </Tabs>
  );
};

export default SettingsTabs;
