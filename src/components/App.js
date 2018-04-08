import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };
  componentDidMount() {
    const params = this.props.match;
    this.ref = base.syncState(`${params.storeID}/fishes`, {
      context: this,
      state: 'fishes'
    })
  }

  componentWillUnmount() {
    base.removeBinding(this.ref)
  }

  addFish = fish => {
    //copy existing state
    const fishes = {...this.state.fishes}
    //add new fish to fish var
    fishes[`fish${Date.now()}`] = fish;
    //set new fishes object to state
    this.setState({ fishes });
    console.log('adding a fish')
  };

  updateFish = (key, updatedFish) => {
    const fishes = {...this.state.fishes};
    fishes[key] = updatedFish;
    this.setState({ fishes })
  }

  loadSampleFishes = () => {
    this.setState({fishes: sampleFishes});
  }

  addToOrder = (key) => {
    // 1. take copy of state
    const order = {...this.state.order};

    // 2.Either add to order or update # in Order
    order[key] = order[key] + 1 || 1;
    // 3. Call setState to update state object
    this.setState({ order });
  };

render() {
    return (
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header tagline="Fresh Seafood Market" />
          <ul className='fishes'>
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}/>
            ))}
          </ul>
        </div>
         <Inventory addFish={this.addFish}
           updateFish={this.updateFish}
          loadSampleFishes={this.loadSampleFishes}
          fishes = {this.state.fishes}
        />
      <Order fishes={this.state.fishes} order={this.state.order} />
      </div>
    );
  }
}

export default App;
