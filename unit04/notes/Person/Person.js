import React from 'react';
import './Person.css'

// ES6 equivalent to JS function -> this is an arrow function

// props = all the properties of the components/attributes u add to each object
//  -> they're passed as if they're function parameters
const person = ( props ) => {
    // need 2 import react cuz we're using JSX
    // Can execute 1-line expressions in {} running dynamic React content
    // return <p>I'm a Person and I am {Math.floor(Math.random() * 30)} years old!</p>
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
        
    )
};

// This component is reusable!

export default person;