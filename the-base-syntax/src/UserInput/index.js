import React from 'react';

const UserInput = props => {
    return (
        <div>
            <input type="text" value={props.currentValue} onChange={props.changed}/>
        </div>
    );
}

export default UserInput;