import React from 'react';
//import './Person.css';
//import Radium from 'radium';
import styled from 'styled-components';

// use styled-components to make a valid react component
const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px) {
        width: 450px;
    } 
`

// ES6 equivalent to JS function -> this is an arrow function

// props = all the properties of the components/attributes u add to each object
//  -> they're passed as if they're function parameters
const person = ( props ) => {
    // Radium styling - commented out because we're using styled-components
    // const styleX = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // }
    // need 2 import react cuz we're using JSX
    // Can execute 1-line expressions in {} running dynamic React content
    // return <p>I'm a Person and I am {Math.floor(Math.random() * 30)} years old!</p>
    return (
        //<div className="Person" style={styleX}>
        <StyledDiv>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </StyledDiv>
        //</div>
        
    )
};

// This component is reusable!

//export default Radium(person);
export default person;