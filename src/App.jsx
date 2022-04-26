import { useEffect, useState } from 'react';
import fetchDrink from './services/drinks';

export default function App() {
  const drink = fetchDrink();

  console.log(drink);

  return <h1>Hello Poop</h1>;
}
