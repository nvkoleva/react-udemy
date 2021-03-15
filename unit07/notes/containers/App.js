// useState -> most important react hook (manage state in functional component)
import React, { Component} from 'react';
//import styled from 'styled-components';
import classes from './App.module.css';
//import Radium, { StyleRoot } from 'radium';
// upper case for self-made components
// lower-case reserved for html, etc.
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
// import WithClass from '../hoc/WithClass';
import withClass from '../hoc/withClass';
import Auxiliary from '../hoc/Auxiliary';
import AuthContext from '../context/auth-context';

class App extends Component {
  constructor ( props ) {
    super ( props );
    console.log('[App.js] constructor');
  }
  
  state = {
    persons: [ // array w below properties
      { id: 'hjhf', name: 'Max', age: 28},
      { id: 'djkdfjl', name: 'Manu', age: 29},
      { id:  'dfjkf', name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true,
    authenticated: false
  }

  static getDerivedStateFromProps( props, state ) {
    console.log('[App.js] getDerivedStateFromProps', props );
    return state;
  }

  // This function is not used any more and will be removed from react in the future
  // componentWillMount () {
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount () {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate ( nextProps, nextState ) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate () {
    console.log('[App.js] componentDidUpdate');
  }

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
    // also, recommended way of updating the state when relying on an old state
    this.setState( ( prevState, props) => { 
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      };
    });
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

  loginHandler = () => {
    this.setState({authenticated: true});
  };

  render() {
    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPersons) {
      persons = ( // here, send to new component Persons instead & pass output of the 2 functions & the state
          <Persons 
            persons={this.state.persons} 
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
            isAuthenticated={this.state.authenticated}/>
      );
    }

    return ( // Use new Cockpit component to handle button & toggling
      //<WithClass classes={classes.App}> (HOC Method 1)
      <Auxiliary>
        <button onClick={()=>{this.setState({showCockpit:false})}}>Remove Cockpit</button>
        <AuthContext.Provider 
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler}}>
          {this.state.showCockpit ? 
            <Cockpit 
              title={this.props.appTitle}
              showPersons={this.state.showPersons} 
              personsLength={this.state.persons.length}
              clicked={this.togglePersonsHandler}/> : null}
          {persons}
        </AuthContext.Provider>
      </Auxiliary>
      //</WithClass>
    );
  }
}
export default withClass(App, classes.App);