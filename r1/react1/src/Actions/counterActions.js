import * as T from '../Constants/counterTypes';

export const add1 = _ => {
    return {
        type: T.ADD_1
    }
}

export const rem1 = _ => {
    return {
        type: T.REM_1
    }
}

export const addRange = payload => {
    return {
        type: T.ADD_RANGE,
        payload
    }
}