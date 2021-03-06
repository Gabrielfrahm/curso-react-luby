import * as actionsType from './actions';

const initialState= {
    counter: 0,
    result: [],
}

const reducer = (state = initialState, action) => {
    // if(action.type === 'INCREMENT'){
    //     return {
    //         counter: state.counter + 1,
    //     }
    // }
    switch(action.type){
        case actionsType.INCREMENT:
            return {...state,counter: state.counter + 1}
        case actionsType.DECREMENT:
            return {...state,counter: state.counter - 1}
        case actionsType.ADD:
            return {...state,counter: state.counter + action.val}
        case actionsType.SUBTRACT:
            return {...state,counter: state.counter - action.val}
        case actionsType.STORE_RESULT:
            return {...state,result: state.result.concat({id: new Date(), value: state.counter})}
        case actionsType.DELETE_RESULT:
            const updatedArray = state.result.filter(res => res.id !== action.resElId);
            return {
                ...state, result: updatedArray,
            }
        default:
            return state;
    }
    // return state;
}

export default reducer;