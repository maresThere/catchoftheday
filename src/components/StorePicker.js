import React from 'react';
import { getFunName } from './helpers';

class StorePicker extends React.Component {

  myInput = React.createRef();

  goToStore = event => {
    // stop form from loading
    event.preventDefault();
    // get text from input
    console.log(this.myInput.value);
  }

  render() {

    return (
      <form className = "store-selector" onSubmit={this.goToStore}>
      <h2> pick a store </h2>

      <input
      type ="text"
      ref={this.myInput}
       required
       placeholder='store name'
       defaultValue={getFunName()}
      />
      <button type='submit'> Visit Store→ </button> </form>)
  }
}

export default StorePicker;
