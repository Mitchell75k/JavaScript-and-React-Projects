/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './App.css';

//importing prop-types to check the type of props passed to the PersonCard component
import PropTypes from 'prop-types';

function PersonCard(props) {
  //here we are destructuring the props passed to the PersonCard component from the App component and assigning them to their own variables
  const { firstName, lastName, age, hairColor, onIncreaseAge } = props;

  //logic for the card
  return (
    <div>
      <h2> {firstName} {lastName}</h2>
      <p>Age: {age}</p>
      <p>Hair Color: {hairColor}</p>
      <button onClick={() => props.onIncreaseAge()}>Increase Age</button>
    </div>
  );
}

//here we are checking the type of props passed to the PersonCard component to ensure that they are of the correct type (not needed rn but good practice)
PersonCard.propTypes = { 
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  hairColor: PropTypes.string.isRequired,
  onIncreaseAge: PropTypes.func.isRequired
};

// App component which renders the PersonCard component
function App() { //Parent component of PersonCard
  const [people, setPeople] = useState([
    { firstName: "John", lastName: "Doe", age: 30, hairColor: "Black" },
    { firstName: "Jane", lastName: "Smith", age: 25, hairColor: "Blonde" },
    { firstName: "Mike", lastName: "Jackson", age: 40, hairColor: "Brown" },
    { firstName: "Yo", lastName: "Mama", age: 2000, hairColor: "Bald" },
  ]);

  //function to increase the age of a person, occurs when the button is clicked
  const increaseAge = (index) => {
    const updatedPeople = [...people]; //remember! '...' means to copy the array in its entirety
    updatedPeople[index].age += 1;
    setPeople(updatedPeople); //setting the state of people to the updatedPeople array
  };

  return (
    //using .map to iterate over the people array and render a PersonCard for each person
    <div>
      {people.map((person, index) => (
        <PersonCard
          key={index} //index represents the index of the person in the people array
          firstName={person.firstName}
          lastName={person.lastName}
          age={person.age}
          hairColor={person.hairColor}
          onIncreaseAge={() => increaseAge(index)}
        />
      ))}
    </div>
  );
}

export default App;