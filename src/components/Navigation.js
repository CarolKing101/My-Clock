import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/weather">Weather</Link></li>
                <li><Link to="/countdown">Countdown</Link></li>
                <li><Link to="/timezone-converter">Time Zone Converter</Link></li>
                <li><Link to="/calculator">Calculator</Link></li>
                <li><Link to="/calendar">Calendar</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;
