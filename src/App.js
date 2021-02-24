// useState -> most important react hook (manage state in functional component)
import React, { Component} from 'react';
//import styled from 'styled-components';
import './App.css';
//import Radium, { StyleRoot } from 'radium';
// upper case for self-made components
// lower-case reserved for html, etc.
import Person from './Person/Person';


// Button styled-components style - can use as regular react component below but write normal css inside of declaration
// const StyledButton = styled.button`
//   background-color: ${props => props.alt ? 'red' : 'green'};
//   color: white;
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px;
//   cursor: pointer;

//   &:hover: {
//     background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
//     color: black;
//   }
// `;

class App extends Component {
  // while props are passed from outside, state is managed from inside a component
  // only available in stateful components that extend components (excl. hooks)

  // state should be used w care because it can make apps hard to manage (functions preferred)
  state = {
    persons: [ // array w below properties
      { id: 'hjhf', name: 'Max', age: 28},
      { id: 'djkdfjl', name: 'Manu', age: 29},
      { id:  'dfjkf', name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  // method = function of your class

  // // if using this in method below, gotta use ES6 syntax bcs otherwise this will be referring to local scope of function
  // switchNameHandler = (newName) => {
  //   // console.log('Was clicked!');
  //   // Don't do this: this.state.persons[0].name = 'Maximillian';
  //   // Do this instead:
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 28},
  //       { name: 'Manu', age: 29},
  //       { name: 'Stephanie', age: 27}
  //     ]})
  // }

  // Will dynamically edit name of Manu
  nameChangedHandler = ( event, id ) => {
    // findIndex is a default JS function - it will execute on every element of the array
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id; // will return true if they're equal
    });

    const person = { // since it's bad 2 mutate state, better to make a new object & use spread operator
      ...this.state.persons[personIndex]
    };

    // here, not manipulating original object now but copy made above w spread operator
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    // set copies to original state so we're not constantly mutating it above
    this.setState( { persons: persons});
  }

  // Delete person when clicking on a name
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    // Spread ES6 operator, equivalent to slice method above
    // Use this to create a copy, update & change the state (immutability)
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.showPersons;
    this.setState({showPersons: !doesShow});
  }

  // using () in onClick switchNameHandler because we only want to execute it when/if the event occurs
  // though, the bind and no () method IS faster, performance-wise
  render() {
    // const styleX = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }
    // };

    let persons = null;

    if (this.state.showPersons) {
      persons = ( // map function will dynamically work w the array so we don't have to hardcode -> it maps every element of array to whatever we need
        <div> 
          {this.state.persons.map((person, index) => { // executed on every element of persons array
          // key has to be a unique identifier
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );

      // styleX.backgroundColor = 'red';
      // styleX[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // };
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red'); // classes = ['red']
    } if (this.state.persons.length <= 1) {
      classes.push('bold'); // classes = ['red', 'bold']
    }

    return ( // wrap all in StyleRoot so we can use Radium advanced css features like media queries
      //<StyleRoot>
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working</p>
        <StyledButton alt={this.state.showPersons}
          //style={styleX}
          onClick={this.togglePersonsHandler}>Toggle Persons
        </StyledButton>
        {persons}
      </div>
      //</StyleRoot> radium commented out for styled-components
    );
  }
}

// wrapping app w radium is called a higher-order component
//export default Radium(App);
export default App;