import * as T from '../../Constants/counterTypes';

export default function countReducer(state, action) {

    let newState;

    switch (action.type) {
        case T.ADD_1:
            newState = state + 1;
            break;

        case T.REM_1:
            newState = state - 1;
            break;

        case T.ADD_RANGE:
            newState = state + action.payload;
            break;
        
        default: newState = state;
    }


    return newState;

}