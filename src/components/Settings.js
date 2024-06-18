import React from 'react';

const Settings = ({ theme, setTheme, clockSize, setClockSize }) => {
  return (
    <div className="settings">
      <div className="form-group">
        <label htmlFor="theme-select">Theme</label>
        <select
          id="theme-select"
          className="form-select"
          value={theme}
          onChange={e => setTheme(e.target.value)}
        >
          <option value="dark">Dark</option>
          <option value="light">Light</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="size-select">Clock Size</label>
        <select
          id="size-select"
          className="form-select"
          value={clockSize}
          onChange={e => setClockSize(e.target.value)}
        >
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>
    </div>
  );
};

export default Settings;
