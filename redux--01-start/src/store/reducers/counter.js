import * as actionsType from '../actions';

const initialState= {
    counter: 0,

}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionsType.INCREMENT:
            return {...state,counter: state.counter + 1}
        case actionsType.DECREMENT:
            return {...state,counter: state.counter - 1}
        case actionsType.ADD:
            return {...state,counter: state.counter + action.val}
        case actionsType.SUBTRACT:
            return {...state,counter: state.counter - action.val}
        default:
            return state;
    }
}

export default reducer;