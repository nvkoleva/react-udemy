// useState -> most important react hook (manage state in functional component)
import React, { Component, useState} from 'react';
import './App.css';
// upper case for self-made components
// lower-case reserved for html, etc.
import Person from './Person/Person';

// commented out portion is stateful approach; below is stateless/hooks approach
// class App extends Component {
//   // while props are passed from outside, state is managed from inside a component
//   // only available in stateful components that extend components (excl. hooks)

//   // state should be used w care because it can make apps hard to manage (functions preferred)
//   state = {
//     persons: [ // array w below properties
//       { name: 'Max', age: 28},
//       { name: 'Manu', age: 29},
//       { name: 'Stephanie', age: 26}
//     ],
//     otherState: 'some other value'
//   }

//   // method = function of your class

//   // if using this in method below, gotta use ES6 syntax bcs otherwise this will be referring to local scope of function
//   switchNameHandler = () => {
//     // console.log('Was clicked!');
//     // Don't do this: this.state.persons[0].name = 'Maximillian';
//     // Do this instead:
//     this.setState({
//       persons: [
//         { name: 'Maximilian', age: 28},
//         { name: 'Manu', age: 29},
//         { name: 'Stephanie', age: 27}
//       ]})
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>Hi, I'm a React App</h1>
//         <p>This is really working</p>
//         <button onClick={this.switchNameHandler}>Switch Name</button>
//         <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
//         <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> My Hobbies: Racing</Person>
//         <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
//       </div>
//     );
//   }
// }

// Hooks / functional approach
const App = props => {
  // useState always returns an array w exactly 2 elements
  // 1st el is the current state (original array, then the changed one, etc.)
  // 2nd el is a function that allows us to edit that state
  // [] - array destructuring
  const [ personsState, setPersonsState ] = useState({
    persons: [ // array w below properties
      { name: 'Max', age: 28},
      { name: 'Manu', age: 29},
      { name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value'
  });

  const switchNameHandler = () => {
    // When using hooks, the function part of the hook (setPersonsState) does not merge the old state w the new
    //  -> it just replaces it
    // In this case, the otherState will be discarded unlike in the stateful approach
    // can instead do the following before this function:
    // const [otherState, setOtherState] = useState('some other value);
    setPersonsState({
      persons: [
        { name: 'Maximilian', age: 28},
        { name: 'Manu', age: 29},
        { name: 'Stephanie', age: 27}
      ]})
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}> My Hobbies: Racing</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
    </div>
  ); 
}

export default App;
