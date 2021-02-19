// useState -> most important react hook (manage state in functional component)
import React, { Component} from 'react';
import './App.css';
// upper case for self-made components
// lower-case reserved for html, etc.
import Person from './Person/Person';

class App extends Component {
  // while props are passed from outside, state is managed from inside a component
  // only available in stateful components that extend components (excl. hooks)

  // state should be used w care because it can make apps hard to manage (functions preferred)
  state = {
    persons: [ // array w below properties
      { name: 'Max', age: 28},
      { name: 'Manu', age: 29},
      { name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value'
  }

  // method = function of your class

  // if using this in method below, gotta use ES6 syntax bcs otherwise this will be referring to local scope of function
  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // Don't do this: this.state.persons[0].name = 'Maximillian';
    // Do this instead:
    this.setState({
      persons: [
        { name: newName, age: 28},
        { name: 'Manu', age: 29},
        { name: 'Stephanie', age: 27}
      ]})
  }

  // Will dynamically edit name of Manu
  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28},
        { name: event.target.value, age: 29},
        { name: 'Stephanie', age: 26}
      ]})
  }

  // using () in onClick switchNameHandler because we only want to execute it when/if the event occurs
  // though, the bind and no () method IS faster, performance-wise
  render() {
    const styleX = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button 
          style={styleX}
          onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          click={this.switchNameHandler.bind(this, 'Max!')}
          changed={this.nameChangedHandler}>My Hobbies: Racing</Person>
        <Person 
          name={this.state.persons[2].name} 
            age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
