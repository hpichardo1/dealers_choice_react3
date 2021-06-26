import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Header from './Header'
import Container from './Container'



class Main extends Component {
  constructor(){
    super()
    this.state = {

    }
  }


  render(){
    return (
      <div id='main'>
        <Header />
        <Container />
      </div>
    )
  }
}

ReactDOM.render(
  <Main />,
  document.querySelector('#app')
)