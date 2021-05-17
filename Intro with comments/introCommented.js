// importing Component from react to access Component methods such setState
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // creating a js object that we can access within our class using the constructor() method
  constructor(){
    // super() Allows us to call the constructor on the Component and gives us access to this.state
    super();

    //creating a js object than can be called inside the class by writing {this.state.string} within the p tag
this.state = {
string: "Hello World it's been a while"
};
  } 
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.string}
            </p>
           {/* Using the onClick method from our Component import to setState({}) -> changing the state of the component. setState({foo:'foo', fiz:'fiz'}) lets us change the state of any element of the js object defined in the Classe's constructor metod */}
          <button onClick={() => this.setState({string:`Well it's been real, goodbye`})}>Change text</button>
        </header>
      </div>
    );
  }
  
}

export default App;
