// importing Component from react to access Component methods such setState -> This is called destructuring, if we did not import {Component} here we would still be able to use it by writting call App extends React.Component {}instead
import React, { Component } from 'react';

//importing the CardList component
import {CardList} from './components/card-list/card-list.component.jsx'

// Importing the SearchBox component
import {SearchBox} from './components/search-box/search-box.component.jsx'

import './App.css';


class App extends Component {
  // creating a js object that we can access within our class using the constructor() method
  constructor(){
    // super() Allows us to call the constructor on the Component and gives us access to this.state
    super();

    //Calling the state of the component
    this.state = {
      //initializing an empty array that will be populated through the user API
    monsters: [],
    searchField:'',
    };
  } 


//Waiting for the component to mount (promise) the fetching a response (users) from an API, once the fecth is completed convert the response to Json with .json() and then adding the users to the monsters array
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}))
  }

  // Using an arrow function allows us to automatically bind "this" to the scope of the Class constructor, otherwise we would need to specifically bind the this in handlechange to the scope of our constructor function by writing in the constructor:  this.handleChange = this.handleChange.bind(this); That would however force us to do so for each of our methods. The technique we used (Lexical binding) lets us automatically define the scope of this to the constructor for all our methods by writing them as arrow functions
  handleChange = (e) => {
    this.setState({searchField : e.target.value})
  }

  render() {
    /* 
      The code below allows  uses destructuring to convert both the monsters and serchfield states into constants normally the code would be 
      const monsters = this.state.monsters; 
      const searchFied = this.state.searchField 
    */
    const {monsters, searchField}  = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )

    return (
      
      <div className="App">
        <h1>Monsters rolodex</h1>
        <SearchBox
        placeholder="Search Monsters" 
        handleChange = {this.handleChange}
        />

        {/* CardList applies a css grid to the names we are rendering */}
        <CardList monsters={filteredMonsters}> </CardList>
        
      </div>
    );
  }
  
}

export default App;
