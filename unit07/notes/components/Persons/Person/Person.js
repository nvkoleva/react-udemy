import React, { Component } from 'react';
import classes from './Person.module.css';
//import Radium from 'radium';
//import styled from 'styled-components';
import Auxiliary from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
// from installed npm install --save prop-types
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

// use styled-components to make a valid react component
// const StyledDiv = styled.div`
//     width: 60%;
//     margin: 16px auto;
//     border: 1px solid #eee;
//     box-shadow: 0 2px 3px #ccc;
//     padding: 16px;
//     text-align: center;

//     @media (min-width: 500px) {
//         width: 450px;
//     } 
// ` 

// ES6 equivalent to JS function -> this is an arrow function

// Converted to a class-based component (changed props -> this.props)

// props = all the properties of the components/attributes u add to each object
//  -> they're passed as if they're function parameters
class Person extends Component {
    // new approach in React 16 that makes it easier 2 read references
    constructor ( props ) {
        super( props );
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount () {
        //this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render() {
        console.log('[Person.js] rendering...');
        return (
            //<div className="Person" style={styleX}>
            //<StyledDiv>
            //<div className={classes.Person}>
            // in Auxiliary, children refers to what is between the opening & closing tags of <Auxiliary>
            // now we don't just need to return one div
            // Can also use React.Fragment instead of Auxiliary
            //<Auxiliary>
            <React.Fragment>
                {this.context.authenticated ? <p>Authenticated</p> : <p>Please log in.</p>}
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input 
                    //ref={(inputEl) => {this.inputElement = inputEl}} (old approach)
                    ref={this.inputElementRef}
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name} />
            </React.Fragment>
            //</Auxiliary>
            //</div>
        );
    }   
}
// const person = ( props ) => {
//     console.log('[Person.js] rendering...');
//     // Radium styling - commented out because we're using styled-components
//     // const styleX = {
//     //     '@media (min-width: 500px)': {
//     //         width: '450px'
//     //     }
//     // }
//     // need 2 import react cuz we're using JSX
//     // Can execute 1-line expressions in {} running dynamic React content
//     // return <p>I'm a Person and I am {Math.floor(Math.random() * 30)} years old!</p>
//     return (
//         //<div className="Person" style={styleX}>
//         //<StyledDiv>
//         <div className={classes.Person}>
//             <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
//             <p>{props.children}</p>
//             <input type="text" onChange={props.changed} value={props.name} />
        
//         </div>
        
//     )
// };

// This component is reusable!

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};
//export default Radium(person);
export default withClass(Person, classes.Person);