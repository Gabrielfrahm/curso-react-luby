const initialState= {
    counter: 0,
}

const reducer = (state = initialState, action) => {
    // if(action.type === 'INCREMENT'){
    //     return {
    //         counter: state.counter + 1,
    //     }
    // }
    switch(action.type){
        case 'INCREMENT':
            return {counter: state.counter + 1}
        case 'DECREMENT':
            return {counter: state.counter - 1}
        case 'ADD':
            return {counter: state.counter + action.val}
        case 'SUBTRACT':
            return {counter: state.counter - action.val}
        default:
            return state;
    }
    // return state;
}

export default reducer;