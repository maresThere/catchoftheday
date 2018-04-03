import React from 'react';
import { formatPrice } from './helpers';

class Fish extends React.Component {
  render() {
    const { image, name, price, desc, status } = this.props.details;
    const isAvailable = status === 'available'
    return (
      <li className='menu-fish'>
        <img src={image} alt={name} />
        <h3>{name}
        <span className='price'>{formatPrice(price)}</span></h3>
        <p>{desc}</p>
        <button disabled={!isAvailable}>Add To Cart</button>
        <p>{status}</p>
      </li>
    );
  }

}

export default Fish
