import React  from 'react';
import {connect} from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionsType from '../../store/actions';

const  Counter = (props) =>  {
        return (
            <div>
                <CounterOutput value={props.ctr} />
                <CounterControl label="Increment" clicked={props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={props.onIDecrementCounter}  />
                <CounterControl label="Add 5" clicked={props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={props.onSubtractCounter}  />
                <hr/>
                <button onClick={() => props.onStoreResult(props.ctr)}>Store Result</button>
                <ul>
                    {props.storedResult.map(strResult => (
                        <li key={strResult.id} onClick={() => props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                    ))}
                </ul>
            </div>
        );

}

const mapStateToProps = state =>{
    return {
        ctr: state.ctr.counter,
        storedResult: state.res.result
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actionsType.INCREMENT}),
        onIDecrementCounter: () => dispatch({type: actionsType.DECREMENT}),
        onAddCounter: () => dispatch({type: actionsType.ADD, val: 5}),
        onSubtractCounter: () => dispatch({type: actionsType.SUBTRACT, val: 5}),
        onStoreResult: (result) => dispatch({type: actionsType.STORE_RESULT, result: result}),
        onDeleteResult: (id) => dispatch({type: actionsType.DELETE_RESULT, resElId: id}),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);
// export default Counter;