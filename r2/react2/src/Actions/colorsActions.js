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

export const hideId = id => {
    return {
        type: c.HIDE_COLOR_ID,
        payload: id
    }
}

export const removeHidden = _ => {
    return {
        type: c.REMOVE_HIDDEN
    }
}

export const showHidden = _ => {
    return {
        type: c.SHOW_HIDDEN
    }
}

export const editColor = color => {
    return {
        type: c.EDIT_COLOR,
        payload: color
    }
}

export const removeOld = _ => {
    return {
        type: c.REMOVE_OLD
    }
}

export const restoreOld = _ => {
    return {
        type: c.RESTORE_OLD
    }
}