import * as actionsType from '../actions';

const initialState= {
    result: [],
}

const reducer = (state = initialState, action) => {

    switch(action.type){
        case actionsType.STORE_RESULT:
            return {...state,result: state.result.concat({id: new Date(), value: action.result})}
        case actionsType.DELETE_RESULT:
            const updatedArray = state.result.filter(res => res.id !== action.resElId);
            return {
                ...state, result: updatedArray,
            }
        default:
            return state;
    }

}

export default reducer;