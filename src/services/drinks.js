const fetchDrink = async () => {
  
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  }
  
  const drink = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=brandy&api_key=1');

  const drinkJson = await drink.json();

  return drink;
}

export default fetchDrink;