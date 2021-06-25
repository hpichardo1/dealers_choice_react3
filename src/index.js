import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Header from './Header'



class Main extends Component {
  constructor(){
    super()
    this.state = {

    }
  }


  render(){
    return (
      <div id='main'>
        HELLO
      </div>
    )
  }
}

ReactDOM.render(
  <Main />,
  document.querySelector('#app')
)