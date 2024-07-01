import { useEffect, useReducer } from 'react';
import axios from 'axios';
import colorsReducer from '../Reducers/colorsReducer';
import { read } from '../Actions/colorsActions';

const useRead = serverUrl => {

    const [colors, dispachColors] = useReducer(colorsReducer, null);



    useEffect(_ => {
        axios.get(`${serverUrl}colors`)
        .then(res => {
            dispachColors(read(res.data));
        })
        .catch(error => {
            console.log(error);
        });
        // setStore(null);
      }, []);




    return { colors }

}

export default useRead;