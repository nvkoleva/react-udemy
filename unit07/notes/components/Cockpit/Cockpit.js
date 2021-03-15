import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
    const toggleBtnRef = useRef( null );
    const authContext = useContext(AuthContext);

    console.log(authContext.authenticated);

    // Whenever the Cockpit gets re-rendered in the virtual DOM
    // useEffect is both componentDidMount and componentDidUpdate in one thing

    // useEffect runs AFTER jsx code in render runs so it will not run immediately
    useEffect (() => {
      console.log('[Cockpit.js] useEffect');
      // Http request can be sent here...
      // only render the 1st time because otherwise it does re-render each time
      //const timer = setTimeout(() => {
      // setTimeout(() => {
      //   alert('Saved data to cloud!');
      // }, 1000);
      toggleBtnRef.current.click();
      return () => {
        // if you clear the timeout before the alert shows, then the alert just wont ever show
        //clearTimeout(timer);
        console.log('[Cockpit.js] Cleanup work in useEffect');
      }; // vvv w empty array, only when component is rendered and is mounted, so about once in this case
    }, []);

    // will run each time it updates
    useEffect(() => {
      console.log('[Cockpit.js] 2nd useEffect');
      return () => {
        console.log('[Cockpit.js] Cleanup work in 2nd useEffect');
      };
    });

    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.personsLength <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    } if (props.personsLength <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working</p>
            <button 
              ref={toggleBtnRef}
              className={btnClass}
              //style={styleX}
              onClick={props.clicked}>Toggle Persons</button>
              <button onClick={authContext.login}>Log-in</button>
              
        </div>
        
    );
};

// use memoization to decide if you should re-render
export default React.memo(cockpit);