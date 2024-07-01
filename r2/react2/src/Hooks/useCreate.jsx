import { useState, useEffect } from 'react';
import axios from 'axios';
import { addColor, remove0Id, replace0Id } from '../Actions/colorsActions';

const useCreate = (serverUrl, dispachColors) => {

    const [create, setCreate] = useState(null);
    const [store, setStore] = useState(null);


    useEffect(_ => {
        if (null === store) {
          return;
        }
        dispachColors(addColor({...store, id: 0}));
        axios.post(`${serverUrl}colors`, store)
        .then(res => {
            console.log(res.data);
            if (res.data.success) {
              dispachColors(replace0Id(res.data.id));
            } else {
              dispachColors(remove0Id());
            }
        })
        .catch(error => {
            console.log(error);
            dispachColors(remove0Id());
        });
        setStore(null);
      }, [store, serverUrl]);




    return { create, setCreate, setStore }

}

export default useCreate;