import React, { Component } from 'react'

class Form extends Component {
  constructor(props){
    super(props)
    this.state = {
        brand: '', 
        model: '',
        type: 'SuperCar',
        price: '0',
        dealerId: 1,
        clientName: ''
      }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(ev) {
    const value = ev.target.value
    this.setState({ 
      ...this.state,
      [ev.target.name]: value 
     });
  }
  async handleSubmit(ev) {
    ev.preventDefault();
    const { brand, model, price, clientName } = this.state;
    this.props.submit(brand, model, price, clientName );
    this.setState({  
      brand: '', 
      model: '',
      price: '',
      clientName: '' 
    });
  }

  render() {
    const { brand, model, price, clientName } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input
            value={brand}
            name='brand'
            placeholder="Brand"
            onChange={(ev) => this.handleChange(ev)}
            
          />
        </label>
        <label>
          <input
            value={model}
            name='model'
            placeholder="Model"
            onChange={(ev) => this.handleChange(ev)}
          />
        </label>
        <label>
          <input
            value={price}
            name='price'
            placeholder="Price"
            onChange={(ev) => this.handleChange(ev)}
          />
        </label>
        <label>
          <input
            value={clientName}
            name='clientName'
            placeholder="Client Name"
            onChange={(ev) => this.handleChange(ev)}
          />
        </label>
        <button type="submit">Add Sale</button>
      </form>
    );
  }

}

export default Form