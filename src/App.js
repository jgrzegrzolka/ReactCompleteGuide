import './App.css';
import Person from './Person/Person';
import react, { Component, Fragment } from 'react';
import person from './Person/Person';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${ props => props.alt ? 'green' : 'red' };
  color: white;
  font: inherit;
  border: 1x solid blue;
  padding: 8px;
  cursor: pointer;
  
  &:hover {
    background-color:  ${ props => props.alt ? 'lightgreen' : 'salmon' };
    color: black;
  }
`;

class App extends Component {

  state = {
    persons: [
      { id: '1', name: 'Max', age: 28 },
      { id: '2', name: 'Manu', age: 29 },
      { id: '3', name: 'Bolo', age: 20}
    ],
    otherState: 'some other state',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => { 
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonHandler = () => this.setState({ showPersons: !this.state.showPersons });

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = { 
      ...this.state.persons[personIndex],
      name: event.target.value
    };

    const persons = [...this.state.persons];
    persons[[personIndex]] = person;

    this.setState({persons: persons})
  }

  render(){

    const style = {
      
    };

    let persons = null;

    if (this.state.showPersons){
      persons = (<Fragment> { this.state.persons.map(((p, i) => { return (
        <Person 
          key={p.id} 
          name={p.name} 
          age={p.age} 
          click={() => this.deletePersonHandler(i)}
          changed={(e) => this.nameChangedHandler(e, p.id)}
        />
      )}))} </Fragment>)

      style.backgroundColor = 'red';

      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    let classes = ['red', 'bold'].join(' ');

    return (
       <div className="App">
        <h1 className={classes}>this is working</h1>
        <StyledButton alt={this.state.showPersons} onClick={ this.togglePersonHandler }>Toggle</StyledButton>
        { persons }
      </div>
    );
  }
}

export default App;
