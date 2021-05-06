import React, {Component} from 'react';
import './App.css';
import data from './foods.json';
import 'bulma/css/bulma.css';
import FoodBox from './components/FoodBox';

// got stuck horably started over again but didn´t came far..
class App extends Component {
  state = {
    food: data
  }

  handleAddFood = (food)=>{
    this.setState({
      food:[food, ...this.state.food]
    })
  }
  
  handleShowForm = ()=>{

  }

  handleSubmit = ()=>{

  }
 const {name, calories}= e.target
 let neFood = {
   name: name.value,
   calories.value
 }





  render(){
    const {food} = this.state;
    return(
      <div>
      
      {food.map((food=>{
        return <FoodBox anyfood = {food}/>
      }))}

      </div>
    )
  }

}

export default App;
