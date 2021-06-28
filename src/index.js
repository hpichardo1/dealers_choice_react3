import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Header from './Header'
import DealerOne from './DealerOne'
import Form from './Form'
import Client from './Client'


class Main extends Component {
  constructor () {
    super()
    this.state = {
      cars: [],
      selectedClient: {}
    }
    this.deleteSale = this.deleteSale.bind(this)
    this.submit = this.submit.bind(this)
    this.selectClient = this.selectClient.bind(this)
  }
async componentDidMount (){
  try {
    const response = await axios.get('/cars')
    const cars = response.data
    this.setState( { cars: cars })
  }
  catch (err){
    console.log('CARS',this.state.cars)
    console.log('*****ISSUE WITH DIDMOUNT', err)
  }
}
async selectClient (id){
  try {
    const response = await axios.get(`/clients/${id}`)
    const selectedClient = response.data
    this.setState( { selectedClient: selectedClient } )
  }
  catch (err){
    console.log('FAILURE SELECT CLIENT', err)
  }
}


async deleteSale(id){
  try {
    await axios.delete(`/${id}`)
    this.setState({
      cars: this.state.cars.filter(car =>{
        if (car.id !== id){
          return car
        }
      } )
    })
  }
  catch(err){
    console.log('DELETE ERRRRORRR', err)
  }
}
async submit(brand, model, price, clientName){
  try {
    const newCar = (await axios.post('/create', { brand, model, price, clientName })).data
    this.setState({
      cars: [...this.state.cars, newCar]
    })
  }
  catch(err){
    console.log('ADD FAILURE', err)
  }
}

  render(){
    const { cars, selectedClient } = this.state

    return (
      <div id='main'>
        <Header />
        <DealerOne selectClient={this.selectClient} cars={cars} deleteSale={this.deleteSale} />
        <Client selectedClient={selectedClient} />
        <Form submit={this.submit}  />
      </div>
    )
  }
}

ReactDOM.render(
  <Main />,
  document.querySelector('#app')
)