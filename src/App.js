import React, { Component } from 'react';
import './App.css';
import { InputForm } from './components/InputForm.js'
import { AccountInfo } from './components/AccountInfo.js'
import {baseUrl, headers} from './lib/accountService'


class App extends Component {
  state = {
    userInput: '',
    accounts: null,
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    const username = {username: this.state.userInput}
    this.setState({
      userInput: '',
      errorMessage: ''
    })

    this.getJobID(username)
    .then(res => this.getAccounts(res))
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

  getJobID = async (username) => {
    this.setState({message: 'Loading...'})
    const response = await fetch(baseUrl + '/start', {
      method: 'POST',
      headers,
      body: JSON.stringify(username)
    })

    const jobId = await response.text();
    return jobId;
  }

  getAccounts = (job) => {
    let timeout;

    const poll = async () => {
      const res = await fetch(`${baseUrl}/results/${job}`, {
        method: 'GET',
        headers
      })

      if(res.status === 202) {
        console.log('202');
      } 
      else if (res.status === 200){
        clearTimeout(timeout);
        const json = await res.json();
        this.setState({
          accounts: json,
          message: ''
        })
        return false;
      }
      timeout = setTimeout(poll, 2000);
    };
    poll()
  }

  render() {
    const submitHandler = this.state.userInput ? this.handleSubmit : this.handleEmptySubmit
    const ready = this.state.accounts != null;
    let accountInfo;
    if (ready) {
      accountInfo = <AccountInfo accounts= {this.state.accounts}/>
    }
    
    return (
    <div className="App">
      <div>
        {this.state.errorMessage && <span className='error'>{this.state.errorMessage}</span>}
        {this.state.message && <span className='loading'>{this.state.message}</span>}
        <InputForm 
          handleInputChange={this.handleInputChange}
          userInput={this.state.userInput}
          handleSubmit={submitHandler}
        />
        {accountInfo}
      </div>
    </div>
    )
  }
}


export default App;


