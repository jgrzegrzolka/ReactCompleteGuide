import './App.css';
import Person from './Person/Person';
import react, { Component } from 'react';

class App extends Component {

  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Bolo', age: 20}
    ]
  }

  switchNameHandler = () => {
    this.setState({persons: [
      { name: 'Maxi', age: 28 },
      { name: 'Manu', age: 100 },
      { name: 'Bolo', age: 20}
    ]})
  }

  render(){
    return (
      <div className="App">
        <button onClick={ this.switchNameHandler }>SAwitch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
