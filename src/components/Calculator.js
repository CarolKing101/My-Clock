import React, { useState } from 'react';

const Calculator = () => {
    const [input, setInput] = useState('');
    const handleClick = (value) => setInput(input + value);
    const handleClear = () => setInput('');
    const handleCalculate = () => setInput(eval(input).toString());

    return (
        <div>
            <h2>Calculator</h2>
            <div className="calculator">
                <input type="text" value={input} readOnly />
                <div className="buttons">
                    {['1','2','3','4','5','6','7','8','9','0','+','-','*','/','.'].map(char => (
                        <button onClick={() => handleClick(char)}>{char}</button>
                    ))}
                    <button onClick={handleClear}>C</button>
                    <button onClick={handleCalculate}>=</button>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
