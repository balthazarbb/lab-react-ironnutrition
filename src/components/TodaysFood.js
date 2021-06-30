import React, { Component } from 'react'

// icon comes from font-awesone. add following to index.html
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

class TodaysFood extends Component {

  handleClick = (food) => {
    this.props.deleteFood(food)
  }

  render() {
    const {quantity, name, calories}  = this.props.food
    return (
      <div>
        <li key={this.props.i}>
        {quantity} {name} = {calories} cal
      <i onClick={() => this.handleClick(this.props.food)} className="fa fa-trash trash-bin"></i>
      </li>
      </div>
    )
  }
}

export default TodaysFood