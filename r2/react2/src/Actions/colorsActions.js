import * as c from '../Constants/colorsConstants';

export const read = payload => {
    return {
        type: c.GET_COLORS_FROM_SERVER,
        payload
    }
}

export const addColor = color => {
    return {
        type: c.ADD_COLOR,
        payload: color
    }
}

export const replace0Id = id => {
    return {
        type: c.ADD_COLOR_ID_TO_0,
        payload: id
    }
}

export const remove0Id = _ => {
    return {
        type: c.REMOVE_COLOR_ID_0
    }
}