import React from 'react';

const TimeZoneSelector = ({ timeZones, selectedTimeZone, onTimeZoneChange }) => {
  return (
    <select className="form-select" value={selectedTimeZone} onChange={e => onTimeZoneChange(e.target.value)}>
      {timeZones.map(tz => (
        <option key={tz} value={tz}>
          {tz}
        </option>
      ))}
    </select>
  );
};

export default TimeZoneSelector;
