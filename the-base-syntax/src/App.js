import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput';
import UserInput from './UserInput';

class App extends Component {
  state = {
      userName: 'Gabriel',

  }

  changedNameHandler = (event) => {
    this.setState({
        userName: event.target.value,
    })
  }
  
  render() {
    return (
     <div>
       <UserInput changed={this.changedNameHandler} currentValue={this.state.userName} />
       <UserOutput name={this.state.userName} >Gosta de aprender</UserOutput>
     </div>
    );
  }
}

export default App;
