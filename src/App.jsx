import { useEffect, useState } from 'react';
import { 
  BrowserRouter as Router,
  Link,
  Route, 
  Redirect,
  Switch 
} from 'react-router-dom';
import { useDrinkContext } from './context/drinkProvider';
import DrinkList from './views/DrinksList/DrinksList';
import DrinkDetail from './views/Details/Details'
import fetchDrink from './services/drinks';
import './App.css';

export default function App() {
  // const {
  //   drinks, setDrinks,
  //   loading, setLoading
  // } = useDrinkContext();
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function getDrinks(){
      const drinks = await fetchDrink();

      setDrinks(drinks);
    }

    getDrinks();
  }, []);
  
  // console.log(drinks.drinks);

  return (
    <Router>
      <main>
        <Switch>
          <Route path='/drinks/:id'>
            <DrinkDetail />
          </Route>
          <Route path='/drinks'>
            <DrinkList drinks={drinks.drinks}/>
          </Route>
          <Route>
            <p>Home Page</p>
            <Link to='/drinks'>Drink List</Link>
          </Route>
        </Switch>
      </main>
    </Router>
    );
}



// {(event)=>handleSearch(event)}
