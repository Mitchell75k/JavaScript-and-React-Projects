/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// This is the ColorBox component that will be displayed in the App component; this component will take in a color and size as props and display a box with that color and size
const ColorBox = ({ color, size }) => {
  return (
    <div
      style={{
        width: size.width, // Using the width value from the size object
        height: size.height, // Using the height value from the size object
        backgroundColor: color,
        display: 'inline-block',
        margin: '10px',
      }}
    ></div>
  );
}
// Adding PropTypes to the ColorBox component so that it can be used as a propType in the App component
ColorBox.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.object.isRequired,
};

// App component that will display a box with a color and size when the form is submitted (logic of the app)
const App = () => {
  const [color, setColor] = useState('');
  const [size, setSize] = useState({ height: '', width: '' });
  const [boxes, setBoxes] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault(); // Preventing the default refresh of the browser to keep our state from being reset
    if (color) {
      setBoxes([...boxes, { color, size }]);
      setColor('');
      setSize({ height: '', width: '' });
    }
  };

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
      <h1>Box Generator</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="Enter a color"
        />
        <input
          type="text"
          value={size.height}
          onChange={(e) => setSize({ ...size, height: e.target.value })}
          placeholder="Enter height; e.g. '100px' "
        />
        <input
          type="text"
          value={size.width}
          onChange={(e) => setSize({ ...size, width: e.target.value })}
          placeholder="Enter width; e.g. '100px' "
        />
        <button type="submit">Add Box</button>
      </form>
      <div>
        {boxes.map((box, index) => (
          <ColorBox key={index} color={box.color} size={box.size} />
        ))}
      </div>
    </div>
  );
};

export default App;