import React from 'react';

const userInput = (props) => {
    // style is only applied to this components since an inline style is used
    // if a css file had been made, it would be app-wide
    const inputStyle = {
        border: '2px solid red'
    };
    return <input 
            type="text"
            style={inputStyle}
            onChange={props.changed} 
            value={props.currentName}/>;
};

export default userInput;