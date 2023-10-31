// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';

function Home() {
  return <h1>Welcome!</h1>;
}



function ParamsComponent() {
  const { word, color, bgCol } = useParams();
  return (
    <div>
      {isNaN(word) ? ( // using the isNaN() method to check if the word is a number or not
        <p
          style={color ? { color: color, backgroundColor: bgCol } // if color is true then use the color and if bgCol is true then use the bgCol
            : null // if color or bgCol is false then use null 
          }
        > 
          This is the word: {word} 
        </p>
        //Or if it is a number then display the number like below:
      ) : (
        <p>
          This is the number: {word}
        </p>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* element represents the component that will be rendered when the route is matched */}
          <Route path="/home" element={<Home />} /> 
          <Route path="/:word" element={<ParamsComponent />} />
          <Route path="/:word/:color/:bgCol" element={<ParamsComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;