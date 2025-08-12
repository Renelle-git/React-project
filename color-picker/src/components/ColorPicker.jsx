import React, { useState } from 'react';
function ColorPicker(){

const [color, setColor] = useState('#ffffff');

function handleColorChange(event) {
    setColor(event.target.value);
}

    return (
        <>
            <div className="color-picker-container">
                <h1>Color Picker</h1>
                <div className="color-display" style={{backgroundColor: color}}>
                    <p>Selected Color: {color}</p>
                </div>
                <label htmlFor="">Select a color:</label>
                <input 
                    type="color" 
                    value={color} 
                    onChange={(e) => handleColorChange(e)} 
                />
            </div>
        </>
    );
}

export default ColorPicker;