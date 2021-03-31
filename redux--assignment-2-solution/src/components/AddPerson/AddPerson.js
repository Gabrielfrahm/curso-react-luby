import React, { useState } from 'react';

import './AddPerson.css';

const addPerson = (props) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);

    const HandleNameChanged = (e) => {
        setName(e.target.value);
    }

    const HandleAgeChanged = (e) => {
        setAge(e.target.value);
    }

    return(
        <div className="AddPerson">
            <input type="text" placeholder="Name" onChange={HandleNameChanged} value={name}/>
            <input type="number" placeholder="Age" onChange={HandleAgeChanged} value={age}/>
            <button onClick={ () => props.personAdded(name, age)}>Add Person</button>
        </div>
    );
};

export default addPerson;