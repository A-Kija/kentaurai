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

        case c.ADD_COLOR:
            (s ?? []).unshift(action.payload);
            break;


        case c.ADD_COLOR_ID_TO_0:
            s = s.map(c => c.id === 0 ? {...c, id: action.payload} : c);
            break;


        case c.REMOVE_COLOR_ID_0:
            s = s.filter(c => c.id !== 0);
            break;

        default:


    }


    return s;
}

export default colorsReducer;