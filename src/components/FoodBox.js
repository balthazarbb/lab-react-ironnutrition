import React from 'react';

class FoodBox extends React.Component {
  state = {
    quantity: 1
  };

  // method to update the qty to be used on the + button
  handleChange = event => {
    const { value } = event.target;

    this.setState({
      quantity: Number(value)
    });
  };

  render() {
    const { name, calories, image } = this.props.food;

    return (
      <div className='box'>
        <article className='media'>
          <div className='media-left'>
            <figure className='image is-128x128 my-food'>
              <img src={image} alt='food' />
            </figure>
          </div>
          <div className='media-content'>
            <div className='content'>
              <p>
                <strong>{name}</strong> <br />
                <small>{calories} cal</small>
              </p>
            </div>
          </div>
          <div className='media-right'>
            <div className='field has-addons'>
              <div className='control'>
                <input onChange={this.handleChange} className='input' type='number' value={this.state.quantity} />
              </div>
              <div className='control'>
              {/* Button will call addFood that was passed via props. In the parameter is the current food plus the qty in the state, all as a single object */}
                <button
                  onClick={() =>
                    this.props.addFood({
                      ...this.props.food,
                      quantity: this.state.quantity
                    })
                  }
                  className='button is-info'
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default FoodBox;