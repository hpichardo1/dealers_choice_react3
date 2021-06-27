import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Header from './Header'
import DealerOne from './DealerOne'
import Form from './Form'


class Main extends Component {
  constructor () {
    super()
    this.state = {
      cars: [],
    }
    this.deleteSale = this.deleteSale.bind(this)
    this.addSuperCar = this.addSuperCar(this)
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
async addSuperCar(text){
  try {
    const newCar = (await axios.post('/create', { text })).data
    this.setState({
      cars: [...this.state.cars, newCar]
    })
  }
  catch(err){
    console.log('ADD FAILURE', err)
  }
}

  render(){
    const { cars } = this.state

    return (
      <div id='main'>
        <Header />
        <DealerOne cars={cars} deleteSale={this.deleteSale} />
        <Form />
      </div>
    )
  }
}

ReactDOM.render(
  <Main />,
  document.querySelector('#app')
)