const fetchDrink = async () => {
  // const drink = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=brandy&api_key=1');
  
  const drink = await fetch("https://www.dnd5eapi.co/api/monsters", {
    headers: {
      Accept: "application/json"
    }
  })
  
  const drinkJson = await drink.json();
  console.log(`|| drinkJson >`, drinkJson.results);
  drinkJson.results.map(monster => console.log(`|| monster >`, monster));

  return drinkJson.drinks;
}

export default fetchDrink;