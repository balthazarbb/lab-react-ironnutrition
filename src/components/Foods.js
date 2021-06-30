import React from 'react';
import FoodBox from './FoodBox';
import FoodForm from './FoodForm';
import Search from './Search';
import foods from '../foods.json';
import TodaysFood from './TodaysFood';

class Foods extends React.Component {
  state = {
    form: false, // to show or hide the form
    foods, // to show all elements
    filtered: foods, // separate state for using the search filter and not mutating original value
    today: [], // state for managing the information in today's foods
  };

  // method to show/hide form to add new foods
  handleClick = () => {
    this.setState({
      form: !this.state.form,
    });
  };

  // method for the search filter functionality. Invoked in Search.
  filterFood = (input) => {
    const filtered = this.state.foods.filter((el) =>
      el.name.toLowerCase().includes(input.toLowerCase())
    );
    this.setState({ filtered });
  };

  // method to add new foods to the list. Invoked in FoodForm.
  pushFood = (food) => {
    // const foods = this.state.foods.slice();
    const foods = [...this.state.foods];
    foods.unshift(food);
    this.setState({ foods, filtered: foods, form: false });
  };

  // method to add food information to today's list. Invoked in FoodBox.
  addFood = (food) => {
    let today = this.state.today.slice();
    let found = today.find((el) => el.name === food.name);

    food.calories *= food.quantity;

    if (found) {
      found.quantity += food.quantity;
      found.calories += food.calories;
    } else {
      today.push(food);
    }

    this.setState({
      today,
    });
  };

  // method to delete food from today's list. Invoked in TodaysFood.
  deleteFood = (food) => {
    let todayCopy = [...this.state.today];
    let today = todayCopy.filter((e) => e.name !== food.name);

    this.setState({
      today,
    });
  };

  render() {
    const totalCalories = this.state.today.reduce(
      (acc, val) => acc + val.calories,
      0
    );

    return (
      <div>
        <h1 class="title">IronNutrition</h1>
        <Search filterFood={this.filterFood} />
        <br />
        <button
          className="button is-success is-outlined"
          onClick={this.handleClick}
        >
          Toggle Add Food Form
        </button>


        {/* ternary for adding FoodForm only if form boolean is true  */}
        {this.state.form ? <FoodForm pushFood={this.pushFood} /> : <br />}

        {/* different way to show form via conditional */}
        {/* {this.state.form && <FoodForm pushFood={this.pushFood}/>} */}
        <br />

        <div>
          <div style={{ width: '70%', float: 'left' }}>
            {/* .map for rendering the FoodBox component for each element of the array*/}
            {this.state.filtered.map((el, i) => (
              <FoodBox key={i} food={el} addFood={this.addFood} />
            ))}
          </div>
          <div
            style={{ width: '30%', float: 'right' }}
            className="column content"
          >
            <h2 className="subtitle">Today's food</h2>
            <ul>
              {this.state.today.map((food, i) => {
                return <TodaysFood food={food} deleteFood={this.deleteFood} />;
              })}
              <strong>Total: {totalCalories} calories</strong>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Foods;