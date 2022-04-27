import RenderDrinks from '../RenderDrinks/RenderDrinks';

export default function DrinkList(props){
console.log(props);
  return (
    <>
      <h1>Drinks</h1>
      {
        // props.drinks.map((drink, i) => 
        // <RenderDrinks key={`${drink}${i}`} drink={drink}/>
        // )
      }
      {/* <RenderDrinks drinks={drinks}/> */}
    </>
  );
}