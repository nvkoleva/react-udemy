import React, { PureComponent } from 'react';
import Person from './Person/Person';

// Converted to a class-based component, added component to import, changed props=>this.props, change export
class Persons extends PureComponent {
    // this not used in this instance because we're not updating the state
    // static getDerivedStateFromProps( props, state ) {
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    // shouldComponentUpdate( nextProps, nextState ) {
    //     console.log('[Persons.js] shouldComponentUpdate');
    //     if ( // just update if something's changed => can use imported PureComponent which will do this whole function instead
    //         nextProps.persons !== this.props.persons || 
    //         nextProps.changed !== this.props.changed || 
    //         nextProps.clicked !== this.props.clicked ){
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    getSnapshotBeforeUpdate ( prevProps, prevState ){
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return { message: 'Snapshot!' };
    }

    componentDidUpdate ( prevProps, prevState, snapshot ) {
        console.log('[Persons.js] componentDidUpdate');
        console.log( snapshot );
    }

    componentWillUnmount () {
        console.log('[Persons.js] componentWillUnmount');
    }

    render() {
        console.log('[Persons.js] rendering...');
        return this.props.persons.map(( person, index ) => { 
            // executed on every element of persons array
            // key has to be a unique identifier
            return (<Person 
                click={() => this.props.clicked(index)}
                name={person.name} 
                age={person.age}
                key={person.id}
                changed={( event ) => this.props.changed( event, person.id )}/>
            );
        });
    }
}
// const persons = (props) => {
//     console.log('[Persons.js] rendering...');
//     return props.persons.map(( person, index ) => { 
//         // executed on every element of persons array
//         // key has to be a unique identifier
//         return (<Person 
//             click={() => props.clicked(index)}
//             name={person.name} 
//             age={person.age}
//             key={person.id}
//             changed={( event ) => props.changed( event, person.id )} />
//         );
//     });
// };

export default Persons;