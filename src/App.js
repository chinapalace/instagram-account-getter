import React, { Component } from 'react';
import './App.css';
import { InputForm } from './components/InputForm.js'
import {fetchAccounts} from './lib/accountService'

class App extends Component {
  state = {
    userInput: ''
  }

  'https://fe-test-zyper-engagement.herokuapp.com/start'
  

  handleSubmit = (evt) => {
    evt.preventDefault()

    this.setState({

      userInput: '',
      errorMessage: ''
    })
    fetchAccounts(this.userInput)
      // .then(() => this.showTempMessage('Accounts loading'))
      .then(() => {
        
      })
  }

  showTempMessage = (msg) => {
    this.setState({message: msg})
    setTimeout(() => this.setState({message: ''}), 2500)
  }

  handleEmptySubmit = (evt) => {
    evt.preventDefault()
    this.setState({
      errorMessage: 'Please supply a username'
    })
  }

  handleInputChange = (evt) => {
    this.setState({
      userInput: evt.target.value
    })
  }

render() {
  const submitHandler = this.state.userInput ? this.handleSubmit : this.handleEmptySubmit
  return (
  <div className="App">
    <div>
      <InputForm 
        handleInputChange={this.handleInputChange}
        userInput={this.state.userInput}
        handleSubmit={submitHandler}
      />
    </div>
  </div>
  )

}

}


export default App;


