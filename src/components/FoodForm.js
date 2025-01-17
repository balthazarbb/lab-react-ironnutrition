import React, { Component } from 'react';

export default class FoodForm extends Component {
  state = {
    foodName: '',
    foodImg: '',
    calories: 0
  };

  // method for updating the state with the input values
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // method to call pushFoods function passed from props with input values
  handleSubmit = event => {
    event.preventDefault();
    const { foodName, foodImg, calories } = this.state;

    this.props.pushFood({
      name: foodName,
      image: foodImg,
      calories
    });

    // to clear state for future uses
    this.setState({
      foodName: '',
      foodImg: '',
      calories: 0
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className='input'
          onChange={this.handleChange}
          name='foodName'
          type='text'
          value={this.state.foodName}
          placeholder='tomato'
        />
        <input
          className='input'
          onChange={this.handleChange}
          type='number'
          name='calories'
          value={this.state.calories}
        />
        <input
          className='input'
          onChange={this.handleChange}
          name='foodImg'
          type='text'
          value={this.state.foodImg}
          placeholder='https://i.imgur.com/5ktcSzF.jpg'
        />
        <button className='button' type='submit'>
          Add
        </button>
      </form>
    );
  }
}