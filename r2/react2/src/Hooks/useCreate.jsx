import { useState, useEffect } from 'react';
import axios from 'axios';
import { addColor, remove0Id, replace0Id } from '../Actions/colorsActions';

const useCreate = (serverUrl, dispachColors, addMessage) => {

    const [create, setCreate] = useState(null);
    const [store, setStore] = useState(null);


    useEffect(_ => {
        if (null === store) {
          return;
        }
        dispachColors(addColor({...store, id: 0}));
        addMessage({ title: 'Colors', type: 'info', text: 'Sending new color...' });
        axios.post(`${serverUrl}colors`, store)
        .then(res => {
            console.log(res.data);
            if (res.data.success) {
              dispachColors(replace0Id(res.data.id));
              addMessage(res.data.msg);
            } else {
              dispachColors(remove0Id());
            }
        })
        .catch(error => {
            console.log(error);
            dispachColors(remove0Id());
            addMessage({ title: 'Colors', type: 'error', text: 'Server error' });
        });
        setStore(null);
      }, [store, serverUrl, addMessage, dispachColors]);




    return { create, setCreate, setStore }

}

export default useCreate;