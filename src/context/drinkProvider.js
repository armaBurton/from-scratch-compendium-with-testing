import {
  createContext,
  useContext,
  useState
} from 'react';

const DrinkContext = createContext();

export default function DrinkProvider({ children }) {
  const [drinks, setDrinks] = useState([]);
  const [loading, setLoading] = useState(true);

  const drinkState = {
    drinks, setDrinks,
    loading, setLoading
  };

  return (
    <DrinkContext.Provider value={drinkState}>
      {children}
    </DrinkContext.Provider>
  );
}

export function useDrinkContext(){
  return useContext(DrinkContext);
}