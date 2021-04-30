import './App.css';
import { personsArray }  from "./personsArray"


function Person(props){
  let names = [];
  let powers = [];
  let favDrinks = [];
  let favFood = [];

  if(personsArray.length-1 >= props.id ){
    
    personsArray.map((value,i) => {
      names[i] = value.name 
      powers[i] = value.power 
      favDrinks[i] = value.favDrink 
      favFood[i] = value.favFood

      return [names,powers,favDrinks,favFood]
    })
  
    return(
      [ <ul id="personFields" key={props.id}>  <li> { names[props.id] } </li> <li>  { powers[props.id] } </li> <li>  { favDrinks[props.id] } </li> <li>  { favFood[props.id] } </li> </ul>]
    )
  } else {
    return null
  }
}

function App() {
  return (
    <div className="App">
      
      <Person id="0"/>

      <Person id="1"/>

      <Person id="2"/>
    </div>
  );
}

export default App;
