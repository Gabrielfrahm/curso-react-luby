import React from 'react';

const Person = (props, children) => {

    return (
        <div>
            <p>I`m a {props.name}, i am {props.age} old!</p>
            <p>{props.children}</p>
        </div>
    )
}

export default Person;