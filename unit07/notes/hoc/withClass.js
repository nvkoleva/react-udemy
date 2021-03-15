import React from 'react';

// HOC Method 1 for creation
// const withClass = props => (
//     <div className={props.classes}>{props.children}</div>
// );

// HOC Method 2
const withClass = ( WrappedComponent, className ) => {
    // use spread operator below to split props into key/val pairs
    // eg. {name: 'Maximilian', age: 28} => name='Maximilian' age=28
    return props => (
        <div className={className}>
            
            <WrappedComponent {...props} />
        </div>
    );
};

export default withClass;