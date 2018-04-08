import React from 'react';
import AddFishForm from './AddFishForm';

class EditFishForm extends React.Component {
  handleChange = (event) => {
    console.log(event.currentTarget.value);
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value
    }
    this.props.updateFish(this.props.index, updatedFish)
  }
  render() {
    return (
     <div className='fish-edit'>
       <input type="text"
         name='name'
         onChange={this.handleChange}
         value={this.props.fish.name}
         placeholder='name'
       />
       <input type="text"
         name='price'
         onChange={this.handleChange}
         value={this.props.fish.price}
         placeholder='price'
       />
       <select type="text"
         name='status'
         onChange={this.handleChange}
         value={this.props.fish.status}>
         <option value='available'>Fresh!</option>
         <option value='unavailable'>Sold Out!</option>
     </select>
       <textarea type="text"
         name='desc'
         onChange={this.handleChange}
         value={this.props.fish.desc}
         placeholder='description'/>
       <input type="text" name=''
         onChange={this.handleChange}
         value={this.props.fish.image}/>

    </div>
    )
  }

}

export default EditFishForm
