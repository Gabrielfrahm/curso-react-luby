import React from 'react';
import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionTypes from '../store/actions';

const Persons = (props) => {
    
        return (
            <div>
                <AddPerson personAdded={props.onAddedPerson} />
                {props.prs.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => props.onRemovedPerson(person.id)}/>
                ))}
            </div>
        );
}

const mapStateToProps = state => {
    return {
        prs: state.persons
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddedPerson: (name, age) => dispatch({type: actionTypes.ADD_PERSON, personData: {name: name, age: age} }),
        onRemovedPerson: (id) => dispatch({type: actionTypes.REMOVE_PERSON, personId: id})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);