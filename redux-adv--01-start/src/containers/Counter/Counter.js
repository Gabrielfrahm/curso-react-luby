import React from 'react';
import { connect } from 'react-redux';

import * as actionsCreators from '../../store/actions';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';


const Counter = (props) => {

    return (
        <div>
            <CounterOutput value={props.ctr} />
            <CounterControl label="Increment" clicked={props.onIncrementCounter} />
            <CounterControl label="Decrement" clicked={props.onDecrementCounter} />
            <CounterControl label="Add 10" clicked={props.onAddCounter} />
            <CounterControl label="Subtract 15" clicked={props.onSubtractCounter} />
            <hr />
            <button onClick={() => props.onStoreResult(props.ctr)}>Store Result</button>
            <ul>
                {props.storedResults.map(strResult => (
                    <li key={strResult.id} onClick={() => props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                ))}
            </ul>
        </div>
    );
}


const mapStateToProps = state => {
    return {

        ctr: state.ctr.counter,
        storedResults: state.res.results
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(actionsCreators.increment()),
        onDecrementCounter: () => dispatch(actionsCreators.decrement()),
        onAddCounter: () => dispatch(actionsCreators.add(10)),
        onSubtractCounter: () => dispatch(actionsCreators.subtract(15)),
        onStoreResult: (result) => dispatch(actionsCreators.storeResult(result)),
        onDeleteResult: (id) => dispatch(actionsCreators.deleteResult(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);