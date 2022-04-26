import { useEffect, useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { useDrinkContext } from './context/drinkProvider';
import DrinkList from './views/Drinks/Drinks';
import DrinkDetail from './views/Details/Details'

export default function App() {
  const {
    drinks, setDrinks,
    loading, setLoading
  } = useDrinkContext();

  const drink = fetchDrink();

  console.log(drink);

  return (
    <nav>
      <Switch>
        <Route path='/drinks/:id'>
          <DrinkDetail />
        </Route>
        <Route path='/drinks'>
          <DrinkList />
        </Route>
        <Route path='/'>
          <p>Home Page</p>
          <Link to='/drinks'>View Drinks</Link>
        </Route>
      </Switch>
    </nav>
  );
}
