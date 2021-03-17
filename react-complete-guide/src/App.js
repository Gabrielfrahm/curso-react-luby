import React, { Component } from 'react';
import './App.css';
import Person from './Person';

class App extends Component {
  state = {
    person: [
        {name: 'Maria', age: 28}
    ]
  }

  switchNameHandler = () => {
   this.setState({
     person: [
       {name: 'Gabriel' , age: 22}
     ]
   })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, i'm React App</h1>
        <button onClick={this.switchNameHandler}>switch name</button>
        <Person name={this.state.person[0].name} age={this.state.person[0].age}>My hobby is play game</Person> 
      </div>
    );
  }
}

export default App;
