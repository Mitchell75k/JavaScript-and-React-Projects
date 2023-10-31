// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {         //using useEffect to fetch the pokemon list from the API and store it in the pokemonList state
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807') //using axios to make the API call and get the data
      .then(response => {
        setPokemonList(response.data.results); //setting the pokemonList state to the response data so that it can be used in the return statement
      })
      .catch(error => { //using the catch method to catch any errors in the API call
        console.log(error);
      });
  }, []); //using the empty array as the second argument to prevent the useEffect from running on every render (which would cause an infinite loop)

  return ( //returning the JSX to display the pokemon list
    <div>
      <h1>Pokemon List</h1>
      <ul>
        {pokemonList.map(pokemon => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;