import './App.css';
import Person from './Person/Person';
import react, { Component, Fragment } from 'react';
import person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Bolo', age: 20}
    ],
    otherState: 'some other state',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({persons: [
      { name: newName, age: 28 },
      { name: 'Manu', age: 100 },
      { name: 'Bolo', age: 20}
    ]})
  }

  togglePersonHandler = () => this.setState({ showPersons: !this.state.showPersons });

  nameChangedHandler = (event) => {
    this.setState({persons: [
      { name: 'Max', age: 28 },
      { name: event.target.value, age: 100 },
      { name: 'Bolo', age: 20}
    ]})
  }

  render(){

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons){
      persons = (<Fragment> { this.state.persons.map(p => { return (<Person name={p.name} age={p.age}/>)})} </Fragment>);
    }

    return (
      <div className="App">
        <button style={ style } onClick={ this.togglePersonHandler }>Toggle</button>
        { persons }
      </div>
    );
  }
}

export default App;
