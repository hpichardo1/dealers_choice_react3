import React, { Component } from 'react'

class Form extends Component {
  constructor(){
    super()
    this.state = {
      brand: '', 
      model: '',
      type: 'SuperCar',
      price: '0',
      dealerId: 1,
      clientName: ''
    }

  }

  render() {
    const { text, model, price, clientName } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={text}
          onChange={(ev) => this.handleChange(ev)}
          placeholder="Add New Item..."
        />
        <button type="submit">Add New Todo</button>
      </form>
    );
  }

}

export default Form