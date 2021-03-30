import React  from 'react';
import {connect} from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

const  Counter = (props) =>  {
    // let state = {
    //     counter: 0
    // }
    // const [count, setCount] = useState(state.counter);

    // let counterChangedHandler = ( action, value ) => {
    //     switch ( action ) {
    //         case 'inc':
    //             setCount(count + 1)
    //             break;
    //         case 'dec':
    //             setCount( count - 1)
    //             break;
    //         case 'add':
    //             setCount( count + value  )
    //             break;
    //         case 'sub':
    //             setCount( count - value  )
    //             break;
    //     }
    // }

        return (
            <div>
                <CounterOutput value={props.ctr} />
                <CounterControl label="Increment" clicked={props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={props.onIDecrementCounter}  />
                <CounterControl label="Add 5" clicked={props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={props.onSubtractCounter}  />
            </div>
        );

}

const mapStateToProps = state =>{
    return {
        ctr: state.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onIDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        onAddCounter: () => dispatch({type: 'ADD', val: 5}),
        onSubtractCounter: () => dispatch({type: 'SUBTRACT', val: 5}),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);
// export default Counter;