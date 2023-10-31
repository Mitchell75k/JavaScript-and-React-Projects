// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import { faker } from '@faker-js/faker';
import './App.css';

function App() {
  const fakeName = faker.person.firstName() + ' ' + faker.person.lastName();

  return (
    <div>
      <h1>Fake Name: {fakeName} smells bad! </h1>
    </div>
  );
}

export default App;
