import { useEffect, useState } from 'react';
import axios from 'axios';
import { hideId, removeHidden, showHidden } from '../Actions/colorsActions';

const useDelete = (serverUrl, dispachColors, addMessage) => {

    const [remove, setRemove] = useState(null); // delete
    const [destroy, setDestroy] = useState(null);



    useEffect(_ => {
        if (null === destroy) {
            return;
        }
        dispachColors(hideId(destroy.id));
        addMessage({ title: 'Colors', type: 'info', text: 'Deleting new color...' });
        axios.delete(`${serverUrl}colors/${destroy.id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.success) {
                    dispachColors(removeHidden());
                    addMessage(res.data.msg);
                } else {
                    dispachColors(showHidden());
                }
            })
            .catch(error => {
                console.log(error);
                dispachColors(showHidden());
                addMessage({ title: 'Colors', type: 'error', text: 'Server error' });
            });
        setDestroy(null);
    }, [destroy, serverUrl, addMessage, dispachColors]);




    return { remove, setRemove, setDestroy }

}

export default useDelete;