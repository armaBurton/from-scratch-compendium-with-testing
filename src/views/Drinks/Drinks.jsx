import { useEffect, useState } from 'react';
import fetchDrink from '../../services/drinks';
import { Link } from 'react-router-dom';

export default function DrinkList(){
  

  const drinksArr = fetchDrink();

  console.log(drinksArr);
  useEffect(() => {
    // const drinksArr = fetchDrink();

    console.log('pew pew pew');
  }, []);

  return (
    <div>sup</div>
  )
}