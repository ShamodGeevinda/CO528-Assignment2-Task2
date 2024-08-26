import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const AngleSelector = () => {
    const [angle, setAngle] = useState(0);

    useEffect(() => {
        if (angle < 0) setAngle(0);
        if (angle > 360) setAngle(360);
    }, [angle]);

    const handleInputChange = (e) => {
        setAngle(parseInt(e.target.value));
    };

    const handleSliderChange = (e) => {
        setAngle(parseInt(e.target.value));
    };

    const handleRadioChange = (e) => {
        setAngle(parseInt(e.target.value));
    };

    return (
        <div className="container">
            <input type="number" value={angle} min="0" max="360" onChange={handleInputChange} />
            <br /><br />
            <input type="range" min="0" max="360" value={angle} onChange={handleSliderChange} />
            <br /><br />
            <div className="radio-buttons">
                {[0, 45, 60, 90, 180].map((value) => (
                    <label key={value}>
                        <input
                            type="radio"
                            name="angle"
                            value={value}
                            checked={angle === value}
                            onChange={handleRadioChange}
                        />
                        {value}°
                    </label>
                ))}
            </div>
        </div>
    );
};

export default AngleSelector;

ReactDOM.render(<AngleSelector />, document.getElementById('root'));