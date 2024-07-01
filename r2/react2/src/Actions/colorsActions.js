import * as c from '../Constants/colorsConstants';

export const read = payload => {
    return {
        type: c.GET_COLORS_FROM_SERVER,
        payload
    }
}