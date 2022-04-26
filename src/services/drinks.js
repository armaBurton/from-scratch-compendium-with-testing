const fetchDrink = async () => {
  
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  }
  
  const drink = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=vodka&api_key=1');

  const drinkJson = await drink.json();

  console.log(`|| drink >`, drinkJson.drinks);
  return drink;
}

export default fetchDrink;