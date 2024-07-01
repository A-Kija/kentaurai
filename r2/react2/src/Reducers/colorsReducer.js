import * as c from '../Constants/colorsConstants';

const colorsReducer = (state, action) => {

    let s = state !== null ? structuredClone(state) : null;

    switch(action.type) {
        
        case c.GET_COLORS_FROM_SERVER:
            s = action.payload.map(row => {
                row.range = row.amount;
                delete row.amount;
                return row;
            });
        break;

        default:


    }


    return s;
}

export default colorsReducer;