import React, { useState } from 'react';
import moment from 'moment-timezone';

const TimeZoneConverter = () => {
    const [time, setTime] = useState('');
    const [fromZone, setFromZone] = useState('');
    const [toZone, setToZone] = useState('');
    const [convertedTime, setConvertedTime] = useState('');

    const handleConvert = () => {
        const converted = moment.tz(time, fromZone).tz(toZone).format('YYYY-MM-DD HH:mm:ss');
        setConvertedTime(converted);
    };

    return (
        <div>
            <h2>Time Zone Converter</h2>
            <input type="datetime-local" value={time} onChange={(e) => setTime(e.target.value)} />
            <input type="text" placeholder="From Timezone" value={fromZone} onChange={(e) => setFromZone(e.target.value)} />
            <input type="text" placeholder="To Timezone" value={toZone} onChange={(e) => setToZone(e.target.value)} />
            <button onClick={handleConvert}>Convert</button>
            {convertedTime && <p>Converted Time: {convertedTime}</p>}
        </div>
    );
};

export default TimeZoneConverter;
