import React, { Component } from "react";

import { CardList } from "./components/card-list/card-list.component";

import { SearchBox } from "./components/search-box/search-box.component";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };

  }
  
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((reSponse) => reSponse.json())
      .then((useRs) => this.setState({ monsters: useRs }));
  }
  
  //arrow function without binding this in constructor 
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monSter =>
      monSter.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
      <div className="App">
      <h1> Monsters Rolodex </h1>
        <SearchBox
          placeholder = "search monsters"
          handleChange ={this.handleChange}
        />
        <CardList monSters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
